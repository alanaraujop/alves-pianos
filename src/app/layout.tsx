import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alves Pianos — restauro, afinação e venda",
  description:
    "Oficina de restauração, afinação e venda de pianos em Campo Grande, Rio de Janeiro, com mais de quarenta anos de atividade.",
};

/**
 * `maximumScale`/`userScalable` ficam deliberadamente permissivos: travar o
 * zoom é a forma mais rápida de reprovar em WCAG 1.4.4 e a que mais atrapalha
 * quem lê o site com pouca visão no celular. `viewportFit: "cover"` deixa o
 * fundo escuro alcançar a faixa do entalhe — o conteúdo continua protegido
 * pelos `env(safe-area-inset-*)` aplicados no rodapé e no menu.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#1e1410",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
