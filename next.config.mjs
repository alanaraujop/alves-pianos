import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF antes de WebP: o otimizador entrega o primeiro formato que o
    // navegador aceitar, e quem não suportar cai no WebP, e depois no JPEG.
    // Medido nestas fotos a 1080px: ~10% menor que o WebP (126 KB contra 139
    // no hero). É pouco porque boa parte do acervo é quase monocromática —
    // em foto colorida a diferença costuma ser bem maior.
    formats: ["image/avif", "image/webp"],
    // Os arquivos de origem são estáveis (trocar a foto troca o `src`), então
    // não há motivo para o otimizador reprocessar a cada minuto — que é o
    // padrão. Um mês de cache evita reencodar AVIF a cada deploy frio.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  experimental: {
    outputFileTracingRoot: projectRoot,
  },
};

export default nextConfig;
