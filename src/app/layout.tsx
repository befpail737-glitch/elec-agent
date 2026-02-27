import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElecAgent 电子元件商城',
  description: '面向终端工厂的 B2B 电子元件一站式采购平台',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
