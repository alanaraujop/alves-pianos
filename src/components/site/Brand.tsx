import Image from 'next/image';
import { MARCA, type MarcaId } from '@/lib/marca';

export type BrandVariant = 'empilhada' | 'horizontal' | 'simbolo';
export type BrandTone = 'onDark' | 'onLight' | 'bege';

/**
 * Qual arquivo cada combinação de forma e fundo usa. A regra vem do manual:
 * existe um arquivo pronto para cada fundo, e nunca se recolore a marca para
 * cobrir um caso que falta.
 *
 * Sobre bege só a versão empilhada tem arquivo próprio (`dourado-marrom`); a
 * deitada e o símbolo caem na versão de fundo claro, que é a que tem contraste
 * sobre madeira clara.
 *
 * O símbolo inverte em relação ao que o nome sugere: em fundo escuro entra o
 * `simbolo-claro`, de quadrado creme — é o mesmo ladrilho que o próprio
 * desenhista usou dentro de `alves-pianos-horizontal-fundo-escuro`.
 */
const ARQUIVO: Record<BrandVariant, Record<BrandTone, MarcaId>> = {
  empilhada: { onLight: 'principal', onDark: 'principalFundoEscuro', bege: 'principalBege' },
  horizontal: { onLight: 'horizontal', onDark: 'horizontalFundoEscuro', bege: 'horizontal' },
  simbolo: { onLight: 'simboloEscuro', onDark: 'simboloClaro', bege: 'simboloEscuro' },
};

/** Altura padrão de cada forma, em px, quando quem chama não pede outra. */
const ALTURA_PADRAO: Record<BrandVariant, number> = {
  empilhada: 96,
  horizontal: 64,
  simbolo: 44,
};

export interface BrandProps {
  variant?: BrandVariant;
  /** Fundo em que a marca vai pousar — decide o arquivo, não um filtro CSS. */
  tone?: BrandTone;
  /** Altura renderizada em px. A largura sai da proporção do arquivo. */
  height?: number;
  /**
   * A marca do cabeçalho está acima da dobra e precisa pintar de imediato,
   * mas não leva `priority`: o preload dele sairia com `fetchPriority="high"`
   * e disputaria banda com a foto do Hero, que é o LCP da página. `eager` só
   * desliga a preguiça — o preload continua, em prioridade normal, e o arquivo
   * é um SVG de poucos KB.
   */
  eager?: boolean;
  className?: string;
}

/**
 * A marca, em SVG, servida direto de `public/images/logo/svg`.
 *
 * Os arquivos têm a tipografia convertida em curvas, então não dependem de
 * fonte instalada. Vão com `unoptimized`: o otimizador do Next recusa SVG sem
 * `dangerouslyAllowSVG`, e não há o que otimizar num vetor de poucos KB — o
 * `width`/`height` continua sendo emitido, que é o que evita o salto de layout
 * enquanto o arquivo carrega.
 *
 * O tamanho pedido é a altura, mas quem vai para o CSS é a largura
 * correspondente, com a altura em `auto`. Assim o `max-width: 100%` que o
 * `globals.css` põe em toda mídia encolhe a marca proporcionalmente num
 * contêiner apertado, em vez de achatá-la — o manual proíbe justamente isso.
 */
export function Brand({
  variant = 'horizontal',
  tone = 'onDark',
  height,
  eager = false,
  className = '',
}: BrandProps) {
  const arquivo = MARCA[ARQUIVO[variant][tone]];
  const alturaFinal = height ?? ALTURA_PADRAO[variant];
  const largura = Math.round((arquivo.width / arquivo.height) * alturaFinal);

  return (
    <Image
      src={arquivo.src}
      alt="Alves Pianos"
      width={largura}
      height={alturaFinal}
      loading={eager ? 'eager' : 'lazy'}
      unoptimized
      className={`block h-auto flex-none ${className}`}
      style={{ width: largura }}
    />
  );
}

/**
 * A marca como ela entra na barra de topo.
 *
 * Abaixo de 640px a assinatura deitada não cabe sem furar o tamanho mínimo do
 * manual: o lettering ocupa 302 das 508 unidades do arquivo, então para os
 * 110px mínimos de "ALVES / teclas / PIANOS" a peça inteira precisaria de
 * ~185px de largura, ou seja 63px de altura — mais do que uma barra de celular
 * comporta. Ali entra o símbolo, que o manual garante até 24px; os 44px usados
 * aqui são folgados e ainda coincidem com o alvo mínimo de toque.
 *
 * De `sm` para cima volta a deitada a 64px de altura, o que dá 189px de
 * largura e 112px de lettering — acima do mínimo, com margem.
 */
export function BrandCabecalho() {
  return (
    <span className="flex flex-none items-center">
      <Brand variant="simbolo" tone="onDark" height={44} eager className="sm:hidden" />
      <Brand variant="horizontal" tone="onDark" height={64} eager className="hidden sm:block" />
    </span>
  );
}
