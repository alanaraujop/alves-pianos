"use client";

import { useState } from "react";
import { Button, NavBar } from "@/components/ui";
import { Acervo, Brand, Contato, Hero, OrcamentoDialog, Rodape, Servicos, Sobre } from "@/components/site";

export default function HomePage() {
  const [orcamentoOpen, setOrcamentoOpen] = useState(false);
  const [contatoEnviado, setContatoEnviado] = useState(false);

  return (
    <>
      {/* Primeiro alvo de tabulação da página: salta o cabeçalho inteiro.
          Invisível até receber foco. */}
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="sticky top-0 z-30">
        <NavBar
          tone="dark"
          brand={<Brand />}
          links={[
            { href: "#servicos", label: "Serviços" },
            { href: "/acervo", label: "Acervo" },
            { href: "#sobre", label: "Sobre" },
            { href: "#contato", label: "Contato" },
          ]}
          action={
            <Button variant="onDark" size="sm" onClick={() => setOrcamentoOpen(true)}>
              Orçamento
            </Button>
          }
        />
      </div>
      {/* Marco `main`: dá ao leitor de tela um atalho direto para o conteúdo,
          que antes não existia em nenhuma das duas páginas. */}
      <main id="conteudo">
        <Hero onOrcamento={() => setOrcamentoOpen(true)} />
        <Servicos />
        <Acervo />
        <Sobre />
        <Contato enviado={contatoEnviado} onEnviado={() => setContatoEnviado(true)} />
      </main>
      <Rodape />
      <OrcamentoDialog open={orcamentoOpen} onClose={() => setOrcamentoOpen(false)} />
    </>
  );
}
