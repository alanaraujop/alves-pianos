"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, NavBar } from "@/components/ui";
import { Brand, Eyebrow, OrcamentoDialog, Rodape, SectionHeading, Shell } from "@/components/site";
import { CREDITOS } from "@/lib/imagens";
import { textStyle } from "@/lib/typography";

/**
 * Página de créditos.
 *
 * Não é enfeite: as fotos do site estão sob licenças Creative Commons que
 * exigem crédito ao autor, indicação da licença e link para a origem. Esta
 * página é onde essa obrigação é cumprida — se as fotos forem trocadas por
 * fotografia própria, ela some junto.
 */
export default function CreditosPage() {
  const [orcamentoOpen, setOrcamentoOpen] = useState(false);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="sticky top-0 z-30">
        <NavBar
          tone="dark"
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
        <Shell>
          <Eyebrow>Créditos</Eyebrow>
          <SectionHeading>De quem são as fotografias deste site</SectionHeading>
          <p className={`mb-6 max-w-prose ${textStyle.body} text-ink-body`}>
            As imagens abaixo são de acervo livre e estão aqui a título ilustrativo, enquanto a oficina não tem
            fotografia própria. Nenhum dos instrumentos mostrados pertence ao acervo da Alves Pianos. Cada foto é usada
            sob a licença indicada, com crédito ao autor e link para a origem.
          </p>
          <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {CREDITOS.map((credito) => (
              <li
                key={credito.id}
                className="rounded-card border border-border-hairline bg-surface-card p-4 shadow-xs"
              >
                <div className={`mb-1 ${textStyle.label} text-ink-strong`}>{credito.titulo}</div>
                <div className={`${textStyle.small} text-ink-muted`}>
                  por {credito.autor || "autor não informado"}
                </div>
                {/* `-mx-2` compensa o padding que dá altura de toque aos
                    links, mantendo-os alinhados com o texto acima. */}
                <div className="-mx-2 mt-1 flex flex-wrap items-center">
                  <a
                    href={credito.licencaUrl}
                    target="_blank"
                    rel="noopener noreferrer license"
                    className={`inline-flex min-h-tap items-center rounded-control px-2 ${textStyle.small} text-ink-link`}
                  >
                    {credito.licenca}
                  </a>
                  <a
                    href={credito.origem}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-tap items-center rounded-control px-2 ${textStyle.small} text-ink-link`}
                  >
                    ver original
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Shell>
      </main>
      <Rodape />
      <OrcamentoDialog open={orcamentoOpen} onClose={() => setOrcamentoOpen(false)} />
    </>
  );
}
