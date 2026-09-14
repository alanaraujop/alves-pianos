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
      <div className="sticky top-0 z-30">
        <NavBar
          tone="dark"
          active="/acervo"
          brand={
            <Link href="/" className="no-underline">
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
      <AcervoCompleto />
      <Publique enviado={publicadoEnviado} onEnviado={() => setPublicadoEnviado(true)} />
      <Rodape />
      <OrcamentoDialog open={orcamentoOpen} onClose={() => setOrcamentoOpen(false)} />
    </>
  );
}
