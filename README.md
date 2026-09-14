# Alves Pianos

Site institucional da Alves Pianos — oficina de restauração, afinação e venda
de pianos em Campo Grande, Rio de Janeiro — construído em Next.js (App
Router) e Tailwind CSS, a partir do design system da marca (Claude Design).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**, com o tema inteiro derivado dos design tokens em
  [`src/styles/tokens.css`](src/styles/tokens.css) — cor, tipografia, espaço,
  raio, elevação e movimento são CSS custom properties; [`tailwind.config.ts`](tailwind.config.ts)
  apenas aponta para elas. Mudar um token muda todo componente que o usa.
- **Storybook 8**, documentando cada componente do design system com
  variantes controláveis (`src/components/ui/*.stories.tsx`)
- **lucide-react** para ícones

## Estrutura

```
src/
  app/                    Rotas (App Router): "/" e "/acervo"
  components/
    ui/                   Componentes do design system (Button, Card, Input, ...)
                           Cada um tem sua .stories.tsx ao lado.
    site/                 Composições específicas do site (Hero, Contato, ...)
                           que montam os componentes de ui/ — não reimplementam primitivos.
  lib/
    typography.ts         Classes Tailwind para os papéis de texto (`--type-*`)
    acervo-data.ts        Dados fictícios do acervo de pianos
  styles/
    tokens.css            Design tokens (fonte única de verdade)
```

## Rodando localmente

```bash
npm install
npm run dev          # site em http://localhost:3000
npm run storybook    # catálogo de componentes em http://localhost:6006
```

Outros comandos: `npm run build`, `npm run lint`, `npm run typecheck`,
`npm run build-storybook`.

## Conteúdo fictício

Preços, nomes de instrumentos, endereço, telefone e depoimentos
(`src/lib/acervo-data.ts` e os componentes em `src/components/site/`) são
exemplos de preenchimento herdados do kit de referência do design system.
Substituir por dados reais antes de qualquer publicação.

## Ativos visuais

A marca ainda não tem uma logo vetorial nem fotografias — todo espaço de
imagem usa o componente `Placeholder` (`src/components/ui/Placeholder.tsx`),
e a marca no cabeçalho/rodapé (`src/components/site/Brand.tsx`) usa um
monograma tipográfico provisório. Ver comentários nesses arquivos para onde
plugar os ativos reais quando existirem.
