/**
 * Registro dos arquivos da marca.
 *
 * Espelha `docs/marca/LEIA-ME.md` — o manual que veio junto com os
 * arquivos. Cada entrada guarda o caminho, as dimensões reais do SVG e em que
 * fundo a versão pode ser usada, para que nenhum componente precise adivinhar
 * qual arquivo pedir.
 *
 * Só SVG aqui: os PNGs equivalentes existem em `public/images/logo/png/` e
 * ficam reservados a onde o vetor não é aceito (e-mail, marketplaces). Os
 * favicons são PNG por exigência dos navegadores e estão em `FAVICONS`.
 */

export interface ArquivoMarca {
  src: string;
  /** Dimensões reais do arquivo — dão a proporção usada ao renderizar. */
  width: number;
  height: number;
}

export const MARCA = {
  /** Versão padrão, empilhada. Fundo claro. */
  principal: { src: '/images/logo/svg/alves-pianos-principal.svg', width: 310.22, height: 172.42 },
  /** Empilhada, para fundo marrom/preto. */
  principalFundoEscuro: { src: '/images/logo/svg/alves-pianos-fundo-escuro.svg', width: 310.22, height: 172.42 },
  /** Empilhada, para bege ou madeira clara. */
  principalBege: { src: '/images/logo/svg/alves-pianos-dourado-marrom.svg', width: 310.22, height: 172.42 },
  /** Deitada — ocupa menos altura. Fundo claro. */
  horizontal: { src: '/images/logo/svg/alves-pianos-horizontal.svg', width: 508.22, height: 172.42 },
  /** Deitada, para fundo marrom/preto. É a da barra de topo do site. */
  horizontalFundoEscuro: { src: '/images/logo/svg/alves-pianos-horizontal-fundo-escuro.svg', width: 508.22, height: 172.42 },
  /** Uma cor só: carimbo, serigrafia, impressão barata. */
  mono: { src: '/images/logo/svg/alves-pianos-mono-escuro.svg', width: 310.22, height: 172.42 },
  /** Ícone quadrado de fundo escuro — usar sobre fundo claro. */
  simboloEscuro: { src: '/images/logo/svg/alves-pianos-simbolo-escuro.svg', width: 280, height: 280 },
  /** Ícone quadrado de fundo creme — usar sobre fundo escuro. */
  simboloClaro: { src: '/images/logo/svg/alves-pianos-simbolo-claro.svg', width: 280, height: 280 },
  /** Símbolo solto, sem o quadrado. Marca d'água, papelaria. */
  simboloSemFundo: { src: '/images/logo/svg/alves-pianos-simbolo-sem-fundo.svg', width: 280, height: 280 },
  /** Recorte redondo pronto. WhatsApp, Google Meu Negócio. */
  avatar: { src: '/images/logo/svg/alves-pianos-avatar.svg', width: 280, height: 280 },
} as const satisfies Record<string, ArquivoMarca>;

export type MarcaId = keyof typeof MARCA;

/**
 * Limites de redução do manual. Abaixo de 110px de largura as teclas do filete
 * dourado se fecham e viram um borrão — nesses espaços entra o símbolo, que
 * aguenta até 24px. As duas constantes existem para que a escolha de tamanho
 * em cada tela possa ser conferida contra o número, em vez de no olho.
 */
export const LARGURA_MINIMA_LETTERING = 110;
export const LARGURA_MINIMA_SIMBOLO = 24;

/**
 * Fração da largura das versões com texto ocupada pelo lettering
 * "ALVES / teclas / PIANOS" — o resto é o símbolo e as margens do arquivo.
 * A `principal` é só lettering; na `horizontal` ele começa em x=202 e vai até
 * o fim útil do desenho, ou seja 302 das 508 unidades.
 */
export const FRACAO_LETTERING = {
  empilhada: 302 / 310.22,
  horizontal: 302 / 508.22,
} as const;

/** Cores oficiais da marca, como publicadas no manual. */
export const CORES_MARCA = {
  marromMadeira: '#3B2A22',
  nogueira: '#6B4A35',
  begeEnvelhecido: '#D8C5A5',
  creme: '#F4EFE6',
  douradoEnvelhecido: '#B08A45',
} as const;

/** Ícones de aba, atalho de celular e PWA — PNG, como o manual entrega. */
export const FAVICONS = {
  svg: '/images/logo/svg/favicon.svg',
  png32: '/images/logo/png/favicon-32.png',
  png180: '/images/logo/png/favicon-180.png',
  png512: '/images/logo/png/favicon-512.png',
} as const;
