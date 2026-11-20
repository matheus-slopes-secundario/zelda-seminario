module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Use POST" });
  }

  const adminToken = req.headers["x-admin-token"];
  if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ status: "error", message: "Não autorizado" });
  }

  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  const headers = { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" };

  try {
    // ── PASSO 1: Scroll de todos os pontos ──
    const allPoints = [];
    let offset = null;

    while (true) {
      const scrollBody = { limit: 100, with_payload: true, with_vector: false };
      if (offset) scrollBody.offset = offset;

      const scrollRes = await fetch(
        `${baseUrl}/collections/${QDRANT_COLLECTION}/points/scroll`,
        { method: "POST", headers, body: JSON.stringify(scrollBody) }
      );

      if (!scrollRes.ok) {
        const d = await scrollRes.json();
        return res.status(scrollRes.status).json({
          status: "error", message: "Falha no scroll", details: d
        });
      }

      const scrollData = await scrollRes.json();
      const points = scrollData.result.points || [];
      allPoints.push(...points);
      offset = scrollData.result.next_page_offset;
      if (!offset || points.length < 100) break;
    }

    // ── PASSO 2: Agrupar por título normalizado ──
    const groups = new Map();
    for (const p of allPoints) {
      const key = (p.payload.titulo || "").toLowerCase().trim();
      if (!key) continue;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(p);
    }

    // ── PASSO 3: Identificar duplicatas ──
    // Critério: manter a com maior "ordem" (mais nova). Empate → texto mais longo.
    const toDelete = [];
    const report = [];

    for (const [, pts] of groups) {
      if (pts.length <= 1) continue;

      pts.sort((a, b) => {
        const oa = a.payload.ordem ?? 0;
        const ob = b.payload.ordem ?? 0;
        if (oa !== ob) return ob - oa;
        return (b.payload.text || "").length - (a.payload.text || "").length;
      });

      const keep = pts[0];
      const del = pts.slice(1).map(p => p.id);
      toDelete.push(...del);

      report.push({
        titulo: keep.payload.titulo,
        total_encontrados: pts.length,
        mantido_ordem: keep.payload.ordem ?? null,
        mantido_texto_chars: (keep.payload.text || "").length,
        deletados: del.length
      });
    }

    // ── PASSO 4: Deletar em batches de 100 ──
    const batchSize = 100;
    for (let i = 0; i < toDelete.length; i += batchSize) {
      const batch = toDelete.slice(i, i + batchSize);
      const delRes = await fetch(
        `${baseUrl}/collections/${QDRANT_COLLECTION}/points/delete?wait=true`,
        { method: "POST", headers, body: JSON.stringify({ points: batch }) }
      );
      if (!delRes.ok) {
        const d = await delRes.json();
        return res.status(delRes.status).json({
          status: "error",
          message: `Falha no batch ${i / batchSize + 1}`,
          details: d
        });
      }
    }

    return res.status(200).json({
      status: "ok",
      message: `Deduplicação: ${allPoints.length} → ${allPoints.length - toDelete.length}`,
      total_antes: allPoints.length,
      total_depois: allPoints.length - toDelete.length,
      duplicatas_removidas: toDelete.length,
      grupos_afetados: report.length,
      report
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
