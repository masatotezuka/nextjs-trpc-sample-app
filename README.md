## 使用技術

- Next.js
- Prisma
- PostgresSQL

## 環境構築

1. リポジトリクローン

```sh
git clone https://github.com/masatotezuka/nextjs-trpc-sample-app.git
```

2. コンテナの作成（PostgresSQL）

```sh
docker compose up -d
```

3. パッケージをインストール

```sh
pnpm i
```

4. マイグレーション

```sh
npx prisma migrate dev
```

5. サーバー起動

```sh
pnpm dev
```
