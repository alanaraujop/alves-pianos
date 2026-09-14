/**
 * Dados de contato da oficina e montagem do link "clique para conversar".
 *
 * O número mora só aqui: antes estava repetido no rodapé e na seção de
 * contato, em dois formatos diferentes (exibição e discagem), o que é como
 * um número desatualizado sobrevive num canto do site.
 */

export const TELEFONE = {
  /** Como aparece na tela, para leitura humana. */
  exibicao: "(21) 98682-3794",
  /**
   * Formato internacional pleno exigido pelo wa.me: código do país + DDD +
   * número, só dígitos. A documentação do WhatsApp é explícita em não aceitar
   * "+", zeros à esquerda, parênteses ou travessões.
   */
  internacional: "5521986823794",
} as const;

export const HREF_TELEFONE = `tel:+${TELEFONE.internacional}`;

export const SERVICOS = [
  { value: "afinacao", label: "Afinação" },
  { value: "restauracao", label: "Restauração" },
  { value: "compra-venda", label: "Compra ou venda" },
] as const;

export type ServicoValor = (typeof SERVICOS)[number]["value"];

export interface PedidoContato {
  nome: string;
  servico: ServicoValor;
  mensagem: string;
}

/** Rótulo legível de um serviço — é ele que vai na mensagem, não o valor. */
export function rotuloServico(valor: string): string {
  return SERVICOS.find((s) => s.value === valor)?.label ?? valor;
}

/**
 * Monta o texto que chega ao WhatsApp da oficina.
 *
 * Os asteriscos são a marcação de negrito do próprio WhatsApp: do lado de lá
 * a mensagem chega com os rótulos destacados, em vez de um bloco corrido.
 *
 * Não há campo de telefone: a mensagem sai do WhatsApp da própria pessoa, e
 * o número dela chega junto com a conversa. Pedi-lo seria pedir duas vezes.
 *
 * "Sobre o piano" é opcional e some quando vazio — uma linha de rótulo sem
 * nada embaixo só atrapalha quem vai ler do outro lado.
 */
export function montarMensagem(pedido: PedidoContato): string {
  const linhas = [
    "Olá! Vim pelo site da Alves Pianos.",
    "",
    `*Nome:* ${pedido.nome.trim()}`,
    `*Serviço:* ${rotuloServico(pedido.servico)}`,
  ];

  const sobre = pedido.mensagem.trim();
  if (sobre) linhas.push("", "*Sobre o piano:*", sobre);

  return linhas.join("\n");
}

/**
 * Link "clique para conversar" conforme a documentação do WhatsApp:
 * `https://wa.me/<número>?text=<texto codificado em URL>`.
 *
 * `encodeURIComponent` é o que transforma as quebras de linha em `%0A` e os
 * acentos em UTF-8 percent-encoded — sem isso a mensagem chega truncada no
 * primeiro caractere especial.
 */
export function linkWhatsApp(texto?: string): string {
  const base = `https://wa.me/${TELEFONE.internacional}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
