"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button, Input, Note, Select, Textarea } from "@/components/ui";
import { SERVICOS, linkWhatsApp, montarMensagem, type ServicoValor } from "@/lib/contato";

export interface FormularioContatoProps {
  enviado: boolean;
  onEnviado: () => void;
  /**
   * Rótulo do botão de envio. O formulário é o mesmo nos dois lugares; só a
   * chamada muda, porque no modal o contexto já é "orçamento".
   */
  acao?: string;
}

const VAZIO = {
  nome: "",
  servico: SERVICOS[0].value as ServicoValor,
  mensagem: "",
};

/**
 * Formulário de contato da oficina — os mesmos campos na seção "Contato" e no
 * modal "Orçamento rápido".
 *
 * O envio não vai para um servidor: monta a mensagem e abre a conversa no
 * WhatsApp da oficina com o texto pronto, seguindo o "clique para conversar"
 * documentado pelo WhatsApp. Quem envia de fato é a pessoa, do próprio
 * número — por isso a confirmação diz que a conversa foi aberta, e não que o
 * pedido foi recebido: prometer recebimento seria mentira se ela fechar a aba
 * sem tocar em enviar.
 *
 * O link também fica visível na confirmação. `window.open` pode ser barrado
 * por bloqueador de pop-up ou por navegador embutido (o de dentro do
 * Instagram, por exemplo, que é por onde muita gente chega), e sem essa saída
 * o formulário simplesmente não faria nada.
 */
export function FormularioContato({ enviado, onEnviado, acao = "Enviar pedido" }: FormularioContatoProps) {
  const [dados, setDados] = useState(VAZIO);
  const [link, setLink] = useState("");
  const confirmacaoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (enviado) confirmacaoRef.current?.focus();
  }, [enviado]);

  const campo = <K extends keyof typeof VAZIO>(chave: K, valor: (typeof VAZIO)[K]) =>
    setDados((atual) => ({ ...atual, [chave]: valor }));

  if (enviado) {
    return (
      <div ref={confirmacaoRef} role="status" tabIndex={-1} className="focus-visible:outline-none">
        <Note tone="success" title="Conversa aberta no WhatsApp" icon={<Check size={18} strokeWidth={1.5} />}>
          Sua mensagem já foi preenchida lá — é só tocar em enviar. Se a janela não abriu,{" "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            abra a conversa por aqui
          </a>
          .
        </Note>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const url = linkWhatsApp(montarMensagem(dados));
        setLink(url);
        // Aberto de dentro do gesto de envio, para não cair no bloqueador.
        const janela = window.open(url, "_blank");
        // Corta a referência à janela nova: sem isso a página do WhatsApp
        // ganha acesso a `window.opener` deste site.
        if (janela) janela.opener = null;
        onEnviado();
      }}
    >
      {/* Único campo obrigatório. `required` deixa a validação com o
          navegador, que já a anuncia e a traduz sozinho. */}
      <Input
        label="Nome"
        placeholder="Como podemos te chamar?"
        name="nome"
        autoComplete="name"
        required
        value={dados.nome}
        onChange={(e) => campo("nome", e.target.value)}
      />
      <Select
        label="Serviço"
        name="servico"
        options={[...SERVICOS]}
        value={dados.servico}
        onChange={(e) => campo("servico", e.target.value as ServicoValor)}
      />
      <Textarea
        label="Conte sobre o piano"
        rows={4}
        name="mensagem"
        placeholder="Marca, modelo, há quanto tempo não é afinado…"
        value={dados.mensagem}
        onChange={(e) => campo("mensagem", e.target.value)}
      />
      <Button variant="gold" full type="submit">
        {acao}
      </Button>
    </form>
  );
}
