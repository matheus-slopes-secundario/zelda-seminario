# 🗡️ Oráculo de Hyrule: Busca Semântica de Ocarina of Time

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-FF0055?style=for-the-badge&logo=qdrant&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um sistema de busca semântica e híbrida desenvolvido para consultar o vasto universo de **The Legend of Zelda: Ocarina of Time**. O projeto utiliza Inteligência Artificial (Embeddings) e busca textual (BM25) para entregar respostas precisas sobre personagens, locais, itens, chefes e comandos de canções para o Nintendo 64.

## 🚀 Tecnologias Utilizadas

*   **Frontend:** HTML5, CSS3 (Glassmorphism e animações), Vanilla JavaScript.
*   **Backend:** Node.js (Serverless Functions na Vercel).
*   **Banco de Dados:** Qdrant Cloud (Vector Database).
*   **Modelos de IA (Inferência no Qdrant):** `intfloat/multilingual-e5-small` (Dense) e `qdrant/bm25` (Sparse).

## 🧠 Como a Mágica Acontece (Arquitetura)

O sistema não usa um banco de dados tradicional. Ele funciona da seguinte forma:

1.  **Ingestão:** Os dados são enviados para o Qdrant. O próprio Qdrant converte o texto em dois vetores: um **Denso** (captura o significado semântico, ex: "dragão" busca "Volvagia") e um **Esparso/BM25** (captura palavras exatas).
2.  **Busca Híbrida (RRF):** Quando você pesquisa, a API faz as duas buscas ao mesmo tempo e funde os resultados usando o algoritmo **Reciprocal Rank Fusion (RRF)**. Isso garante que tanto o contexto quanto as palavras exatas sejam respeitados.
3.  **Boost de Título (Custom Ranking):** Após o Qdrant devolver os resultados, a API em JavaScript faz uma reordenação matemática. Se o título do documento for exatamente igual à sua pesquisa (ex: buscar "Link"), ele recebe um boost massivo de `+1000` pontos, subindo instantaneamente para o topo.

## ✨ Funcionalidades

*   **196 Registros Únicos:** Base de dados curada e deduplicada (sem repetições).
*   **Filtro Semântico e Exato:** Encontra respostas mesmo com erros de digitação ou conceitos indiretos.
*   **Segredos do N64:** O banco de dados inclui os comandos exatos (Direcionais + A) para tocar todas as canções na Ocarina.
*   **UI Temática:** Interface imersiva com paleta de cores de Hyrule, logo oficial transparente e campo de grama animada com efeito de vento.

## 🛠️ Como Instalar e Rodar (Do Zero)

### 1. Pré-requisitos
*   Conta na [Vercel](https://vercel.com).
*   Conta no [Qdrant Cloud](https://cloud.qdrant.io) (Plano Gratuito).
*   Repositório clonado no GitHub.

### 2. Configurar o Qdrant Cloud
1. Crie um *Cluster* no Qdrant Cloud.
2. Gere uma **Database API Key** (com permissão `Manage` ou `Read/Write`).
3. Anote a URL do seu cluster (ex: `https://xxxx.aws.cloud.qdrant.io`).

### 3. Variáveis de Ambiente na Vercel
Configure as seguintes variáveis no painel da Vercel (`Settings > Environment Variables`):

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `QDRANT_URL` | URL do seu cluster Qdrant | `https://...qdrant.io` |
| `QDRANT_API_KEY` | Database API Key do Qdrant | `eyJhbGciOi...` |
| `QDRANT_COLLECTION` | Nome da coleção no banco | `ocarina_of_time` |
| `ADMIN_TOKEN` | Senha para rotas administrativas | `sua-senha-secreta-aqui` |

### 4. Inicializar o Banco de Dados
Após o deploy na Vercel, use uma ferramenta como o **ReqBin** ou **Postman** para rodar as rotas administrativas (lembre-se de colocar o `x-admin-token` no Header):

**Passo A: Criar a Coleção**
*   `POST /api/qdrant-init` (Body vazio)
*   *Cria a coleção com os vetores Dense e BM25 corretos.*

**Passo B: Popular o Banco (Seed)**
*   `POST /api/seed` (Body vazio)
*   *Limpa o banco (à prova de duplicatas) e insere os 196 registros únicos de Hyrule em lotes para evitar timeout.*

### 5. Rodar Localmente (Opcional)
Se quiser testar localmente usando a CLI da Vercel:
```bash
npm i -g vercel
vercel dev
