"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Button, Checkbox, Input, Note, Select, Textarea } from "@/components/ui";

export interface FormularioContatoProps {
  enviado: boolean;
  onEnviado: () => void;
  /**
   * Rótulo do botão de envio. O formulário é o mesmo nos dois lugares; só a
   * chamada muda, porque no modal o contexto já é "orçamento".
   */
  acao?: string;
}

const SERVICOS = [
  { value: "a", label: "Afinação" },
  { value: "r", label: "Restauração" },
  { value: "v", label: "Compra ou venda" },
];

/**
 * Formulário de contato da oficina — os mesmos campos na seção "Contato" e no
 * modal "Orçamento rápido".
 *
 * Existe como componente próprio justamente para que os dois não possam
 * divergir: antes o modal pedia só telefone e serviço, e quem chegava por ali
 * mandava menos informação do que quem descia até o rodapé da home.
 *
 * Ao enviar, a confirmação recebe o foco e é anunciada por `role="status"`.
 * Sem isso, quem usa leitor de tela ou teclado ficava sem referência: o botão
 * que acabou de ser acionado sai do DOM e o foco cai no início da página.
 */
export function FormularioContato({ enviado, onEnviado, acao = "Enviar pedido" }: FormularioContatoProps) {
  const confirmacaoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (enviado) confirmacaoRef.current?.focus();
  }, [enviado]);

  if (enviado) {
    return (
      <div ref={confirmacaoRef} role="status" tabIndex={-1} className="focus-visible:outline-none">
        <Note tone="success" title="Pedido recebido" icon={<Check size={18} strokeWidth={1.5} />}>
          Retornamos em até um dia útil, no WhatsApp que você deixou.
        </Note>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onEnviado();
      }}
    >
      {/* `type`, `inputMode` e `autoComplete` mudam o teclado que sobe no
          celular e habilitam o preenchimento automático. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Nome" placeholder="Como podemos te chamar?" name="nome" autoComplete="name" />
        <Input
          label="Telefone"
          placeholder="(21) 90000-0000"
          name="telefone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
        />
      </div>
      <Select label="Serviço" name="servico" options={SERVICOS} />
      <Textarea
        label="Conte sobre o piano"
        rows={4}
        name="mensagem"
        placeholder="Marca, modelo, há quanto tempo não é afinado…"
      />
      <Checkbox label="Quero receber dicas de conservação" name="dicas" />
      <Button variant="gold" full type="submit">
        {acao}
      </Button>
    </form>
  );
}
