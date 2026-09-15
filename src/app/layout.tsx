import type { Metadata, Viewport } from "next";
import { CORES_MARCA, FAVICONS } from "@/lib/marca";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alves Pianos — restauro, afinação e venda",
  description:
    "Oficina de restauração, afinação e venda de pianos em Campo Grande, Rio de Janeiro, com mais de quarenta anos de atividade.",
  /**
   * Ícone da aba, atalho na tela de início e PWA — os três arquivos que o
   * manual da marca reserva para isso. O SVG vem primeiro para quem o aceita
   * (fica nítido em qualquer densidade de tela); os PNGs cobrem o resto, e o
   * de 180px é o formato que o iOS exige para o atalho.
   */
  icons: {
    icon: [
      { url: FAVICONS.svg, type: "image/svg+xml" },
      { url: FAVICONS.png32, sizes: "32x32", type: "image/png" },
      { url: FAVICONS.png512, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: FAVICONS.png180, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

/**
 * `maximumScale`/`userScalable` ficam deliberadamente permissivos: travar o
 * zoom é a forma mais rápida de reprovar em WCAG 1.4.4 e a que mais atrapalha
 * quem lê o site com pouca visão no celular. `viewportFit: "cover"` deixa o
 * fundo escuro alcançar a faixa do entalhe — o conteúdo continua protegido
 * pelos `env(safe-area-inset-*)` aplicados no rodapé e no menu.
 *
 * A cor da barra do navegador é o marrom madeira do manual, o mesmo fundo do
 * quadrado do símbolo — assim a moldura do sistema emenda com o ícone.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: CORES_MARCA.marromMadeira,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
