# The Paddock — Frontend

Frontend em React + Vite, com componentes separados e navegação via React Router.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Instalação
```bash
npm install
npm run dev
```
Acesse http://localhost:5173.

## Scripts
- `npm run dev`: desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: pré-visualizar build

## Estrutura
- `src/components/layout`: cabeçalho e rodapé.
- `src/components/home`: componentes da homepage.
- `src/components/common`: componentes reutilizáveis.
- `src/pages`: páginas e rotas.
- `src/styles`: tokens e estilos globais.

## Observações
Imagens remotas e conteúdo da próxima corrida são placeholders visuais. Antes da publicação, substitua por imagens próprias/licenciadas e integre dados esportivos verificados.


## Página de pilotos — Drivers Experience

A rota `/pilotos` possui um carrossel demonstrativo em tela cheia com revelação circular controlada pelo cursor. Em dispositivos com toque, a área da imagem alterna a revelação por toque.

**Importante:** os três perfis apresentados são fictícios e servem apenas para demonstrar o comportamento do carrossel. As imagens também são assets conceituais gerados para o protótipo. Substitua nomes, equipes, números e imagens por dados e materiais autorizados antes de publicar o conteúdo como informação real.
