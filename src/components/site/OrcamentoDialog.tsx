"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@/components/ui";
import { FormularioContato } from "./FormularioContato";

export interface OrcamentoDialogProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Quick-quote modal opened from the header "Orçamento" action on every page.
 *
 * Usa o mesmo `FormularioContato` da seção "Contato" — quem pede orçamento
 * pelo cabeçalho manda exatamente a mesma informação de quem desce até o fim
 * da página.
 *
 * O estado de envio fica aqui dentro, e não na página: o modal aparece em três
 * rotas diferentes e cada uma teria de carregar (e reiniciar) esse controle.
 * Reabrir o modal devolve o formulário em branco, que é o esperado de uma
 * janela que se fecha.
 *
 * Não há rodapé com botões: o envio é o botão do próprio formulário — repetir
 * "Enviar" fora dele criaria dois controles para a mesma ação, um deles
 * desligado do `<form>` — e quem desiste fecha pelo "×" ou pelo Escape.
 */
export function OrcamentoDialog({ open, onClose }: OrcamentoDialogProps) {
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (open) setEnviado(false);
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} eyebrow="Orçamento rápido" title="Vamos ouvir o seu piano">
      <FormularioContato enviado={enviado} onEnviado={() => setEnviado(true)} acao="Pedir orçamento" />
    </Dialog>
  );
}
