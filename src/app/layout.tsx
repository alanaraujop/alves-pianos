import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alves Pianos — restauro, afinação e venda",
  description:
    "Oficina de restauração, afinação e venda de pianos em Campo Grande, Rio de Janeiro, com mais de quarenta anos de atividade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
