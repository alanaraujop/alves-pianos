"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, NavBar } from "@/components/ui";
import { AcervoCompleto, Brand, OrcamentoDialog, Publique, Rodape } from "@/components/site";

export default function AcervoPage() {
  const [orcamentoOpen, setOrcamentoOpen] = useState(false);
  const [publicadoEnviado, setPublicadoEnviado] = useState(false);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="sticky top-0 z-30">
        <NavBar
          tone="dark"
          active="/acervo"
          brand={
            <Link href="/" className="no-underline" aria-label="Alves Pianos — página inicial">
              <Brand />
            </Link>
          }
          links={[
            { href: "/#servicos", label: "Serviços" },
            { href: "/acervo", label: "Acervo" },
            { href: "/#sobre", label: "Sobre" },
            { href: "/#contato", label: "Contato" },
          ]}
          action={
            <Button variant="onDark" size="sm" onClick={() => setOrcamentoOpen(true)}>
              Orçamento
            </Button>
          }
        />
      </div>
      <main id="conteudo">
        <AcervoCompleto />
        <Publique enviado={publicadoEnviado} onEnviado={() => setPublicadoEnviado(true)} />
      </main>
      <Rodape />
      <OrcamentoDialog open={orcamentoOpen} onClose={() => setOrcamentoOpen(false)} />
    </>
  );
}
