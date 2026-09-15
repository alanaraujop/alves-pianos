# Marca — onde cada coisa está

`LEIA-ME.md` é o manual como veio do desenhista, sem edição. Os caminhos de
exemplo dentro dele (`/img/…`) são genéricos; **neste projeto os arquivos
ficam em outro lugar**:

| | Caminho |
|---|---|
| SVG (o que o site usa) | `public/images/logo/svg/` |
| PNG (e-mail, marketplaces) | `public/images/logo/png/` |
| Registro em código | [`src/lib/marca.ts`](../../src/lib/marca.ts) |
| Componente | [`src/components/site/Brand.tsx`](../../src/components/site/Brand.tsx) |

Nenhum componente deve apontar para um arquivo de logo direto: peça ao
`Brand` a forma (`empilhada`, `horizontal`, `simbolo`) e o fundo (`onLight`,
`onDark`, `bege`), que ele escolhe o arquivo certo.

As cinco cores oficiais e as duas fontes do manual estão aplicadas em
[`src/styles/tokens.css`](../../src/styles/tokens.css).
