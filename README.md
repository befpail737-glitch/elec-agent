# ElecAgent 电子元件商城

面向终端工厂的 B2B 电子元件一站式采购平台。

## 技术栈

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Cloudflare Workers, Cloudflare D1
- **Auth**: NextAuth.js v5
- **Storage**: Cloudflare R2
- **Email**: Resend

## 开发

```bash
npm install
npm run dev
```

## 部署

```bash
npm run build
npx @cloudflare/next-on-pages
wrangler pages deploy .next
```

## 许可证

MIT