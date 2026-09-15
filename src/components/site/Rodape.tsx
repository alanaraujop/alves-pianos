import { Instagram, MessageCircle, Phone } from "lucide-react";
import { HREF_TELEFONE, linkWhatsApp } from "@/lib/contato";
import { textStyle } from "@/lib/typography";
import { Brand } from "./Brand";

/**
 * Os três atalhos eram `IconButton` sem ação nenhuma — alvos de toque que não
 * levavam a lugar algum. Agora são links de verdade (`tel:`, `wa.me`, perfil),
 * que é o que faz sentido num rodapé e o que o celular sabe abrir. Cada um
 * carrega nome acessível próprio, já que o ícone sozinho não diz nada.
 */
const ATALHOS = [
  { Icon: Phone, href: HREF_TELEFONE, rotulo: "Ligar para a oficina" },
  { Icon: MessageCircle, href: linkWhatsApp(), rotulo: "Falar no WhatsApp" },
  { Icon: Instagram, href: "https://instagram.com/alvespianos", rotulo: "Instagram da oficina" },
];

export function Rodape() {
  return (
    <footer className="bg-wood-800 px-gutter pb-safe pt-7">
      {/* Empilha centralizado no celular e volta à fileira distribuída a partir
          de `md`: com `justify-between` e quebra de linha, as três peças caíam
          desalinhadas no meio do caminho. */}
      <div className="mx-auto flex max-w-container-lg flex-col items-center gap-5 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <Brand />
        <ul className="flex list-none gap-2 p-0">
          {ATALHOS.map(({ Icon, href, rotulo }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={rotulo}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-tap w-tap items-center justify-center rounded-control border border-border-onDark text-gold-300 transition-colors duration-fast ease-standard hover:bg-gold-400/[0.14] focus-visible:shadow-focus-on-dark"
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <div className={`${textStyle.small} text-ink-onDarkMuted`}>
          © 1984–2026 Alves Pianos · Rio de Janeiro
        </div>
      </div>
    </footer>
  );
}
