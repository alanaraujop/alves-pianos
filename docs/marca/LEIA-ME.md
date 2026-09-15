# Alves Pianos — arquivos da marca

Todos os SVGs têm a tipografia **convertida em curvas**. Isso significa que o site
não precisa ter as fontes instaladas — o desenho vai sempre aparecer igual, em
qualquer navegador ou servidor. Fundo transparente em todos os arquivos.

## Qual arquivo usar

| Arquivo | Onde usar |
|---|---|
| `alves-pianos-principal` | Versão padrão. Cabeçalho do site em fundo claro, orçamentos, documentos. |
| `alves-pianos-horizontal` | Barra de topo do site, e-mail, assinatura. Ocupa menos altura. |
| `alves-pianos-fundo-escuro` | Rodapé escuro ou qualquer fundo marrom/preto. |
| `alves-pianos-horizontal-fundo-escuro` | Mesma coisa, no formato deitado. |
| `alves-pianos-dourado-marrom` | Sobre bege ou madeira clara. |
| `alves-pianos-mono-escuro` | Uma cor só. Carimbo, fax, gravação, serigrafia, impressão barata. |
| `alves-pianos-simbolo-escuro` | Ícone quadrado. Perfil do Instagram, botão, selo. |
| `alves-pianos-simbolo-claro` | Mesmo ícone em fundo claro, com fio de contorno. |
| `alves-pianos-simbolo-sem-fundo` | Símbolo solto, sem o quadrado. Marca d'água, papelaria. |
| `alves-pianos-avatar` | Recorte redondo, já pronto. WhatsApp, Google Meu Negócio. |
| `favicon-32` / `favicon-180` / `favicon-512` | Ícone da aba do navegador, atalho no celular, PWA. |

## No site, prefira SVG

O SVG é vetor: fica nítido em qualquer tela e pesa pouco. Use o PNG só onde o
SVG não for aceito (alguns clientes de e-mail, alguns marketplaces).

```html
<img src="/img/alves-pianos-horizontal.svg" alt="Alves Pianos" width="320">
<link rel="icon" href="/img/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/img/favicon-180.png">
```

## Tamanho mínimo

O lettering completo funciona até cerca de **110 px de largura**. Abaixo disso as
teclas do filete dourado se fecham e viram um borrão. Para espaços menores que
isso, use o símbolo — ele aguenta até 24 px.

## Cores

| | Hex |
|---|---|
| Marrom madeira | `#3B2A22` |
| Nogueira | `#6B4A35` |
| Bege envelhecido | `#D8C5A5` |
| Creme / marfim | `#F4EFE6` |
| Dourado envelhecido | `#B08A45` |

## Tipografia do site

Para os textos do site, mantenha as mesmas fontes da marca — ambas gratuitas
para uso comercial, disponíveis no Google Fonts:

- **Libre Baskerville** (Bold) — títulos
- **Montserrat** (Medium / Regular) — textos e menus

## O que evitar

- Não estique nem achate a marca: redimensione sempre proporcionalmente.
- Não troque as cores nem aplique sombra, brilho ou contorno.
- Não coloque a versão escura sobre fundo escuro nem a clara sobre fundo claro —
  existe um arquivo pronto para cada caso.
- Deixe uma margem livre em volta da marca de pelo menos a altura da letra "A".
