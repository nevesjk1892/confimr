FROM node:22-alpine AS builder

WORKDIR /app

# Instala a versão usada pelo lockfile sem depender da assinatura do Corepack.
RUN npm install --global pnpm@10.4.1

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:22-alpine AS production

WORKDIR /app

RUN npm install --global pnpm@10.4.1

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/index.js"]
