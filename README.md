# Havan Confirmador

Aplicação React/Vite com servidor Express para servir o bundle de produção. O projeto foi organizado para funcionar com deploy via Docker no Railway.

## Requisitos

- Node.js 22+
- pnpm 10.4.1+

## Desenvolvimento local

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Validação e build

```bash
pnpm check
pnpm build
pnpm start
```

O servidor usa `process.env.PORT` quando fornecida pelo ambiente e escuta em todas as interfaces. O build do frontend é gerado em `dist/public` e o servidor compilado em `dist/index.js`.

## Deploy no Railway

1. Envie todos estes arquivos para a raiz do repositório GitHub; este pacote é intencionalmente flat e não depende de `client/`, `server/`, `shared/` ou `patches/`.
2. Crie um serviço Railway apontando para o repositório.
3. Deixe o **Root Directory** vazio, pois o `package.json` está na raiz.
4. O Railway detectará o `Dockerfile`. Não defina um comando de start que substitua o `CMD` da imagem.
5. Configure as variáveis `VITE_FRONTEND_FORGE_API_KEY` e `VITE_FRONTEND_FORGE_API_URL` somente se o componente de mapa for utilizado. Variáveis `VITE_*` são incorporadas ao bundle público.
6. Analytics foi removido do HTML desta versão para evitar uma URL inválida quando as variáveis não são configuradas.

## Dados pela URL

A tela principal aceita `nome`, `cpf` e `dataNascimento` como parâmetros de query string e também recebe os mesmos dados por `window.postMessage`. Evite enviar CPF real em URLs de produção, pois URLs podem ficar registradas em histórico, logs ou ferramentas de analytics.
