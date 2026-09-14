import { Instagram, MessageCircle, Phone } from "lucide-react";
import { IconButton } from "@/components/ui";
import { textStyle } from "@/lib/typography";
import { Brand } from "./Brand";

export function Rodape() {
  return (
    <footer className="bg-wood-800 px-6 py-7">
      <div className="mx-auto flex max-w-container-lg flex-wrap items-center justify-between gap-6">
        <Brand />
        <div className="flex gap-3">
          <IconButton variant="onDark" label="Instagram">
            <Instagram size={18} strokeWidth={1.5} />
          </IconButton>
          <IconButton variant="onDark" label="WhatsApp">
            <MessageCircle size={18} strokeWidth={1.5} />
          </IconButton>
          <IconButton variant="onDark" label="Telefone">
            <Phone size={18} strokeWidth={1.5} />
          </IconButton>
        </div>
        <div className={`${textStyle.small} text-ink-onDarkMuted`}>© 1984–2026 Alves Pianos · Rio de Janeiro</div>
      </div>
    </footer>
  );
}
