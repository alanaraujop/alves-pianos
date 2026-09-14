"use client";

import { useState } from "react";
import { Button, NavBar } from "@/components/ui";
import { Acervo, Brand, Contato, Hero, OrcamentoDialog, Rodape, Servicos, Sobre } from "@/components/site";

export default function HomePage() {
  const [orcamentoOpen, setOrcamentoOpen] = useState(false);
  const [contatoEnviado, setContatoEnviado] = useState(false);

  return (
    <>
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
      <Hero onOrcamento={() => setOrcamentoOpen(true)} />
      <Servicos />
      <Acervo />
      <Sobre />
      <Contato enviado={contatoEnviado} onEnviado={() => setContatoEnviado(true)} />
      <Rodape />
      <OrcamentoDialog open={orcamentoOpen} onClose={() => setOrcamentoOpen(false)} />
    </>
  );
}
