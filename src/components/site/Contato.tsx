import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { textStyle } from '@/lib/typography';
import { FormularioContato } from './FormularioContato';
import { Eyebrow, SectionHeading, Shell } from './Shell';

export interface ContatoProps {
  enviado: boolean;
  onEnviado: () => void;
}

/**
 * Telefone e Instagram deixam de ser texto solto e viram links: no celular,
 * tocar no número abre o discador e tocar no @ abre o app — antes era preciso
 * selecionar e copiar, que é a operação mais ingrata que existe numa tela de
 * toque. Os itens sem ação (endereço, horário) continuam texto.
 */
const CONTATOS: {
  Icon: typeof Phone;
  texto: string;
  href?: string;
  rotulo?: string;
}[] = [
  {
    Icon: Phone,
    texto: '(21) 98682-3794 · WhatsApp',
    href: 'tel:+5521986823794',
    rotulo: 'Ligar para (21) 98682-3794',
  },
  {
    Icon: MapPin,
    texto: 'R. Bergson Gurjão Farias, s/n — Campo Grande, Rio de Janeiro',
  },
  { Icon: Clock, texto: 'Segunda a sábado, 8h às 18h' },
  {
    Icon: Instagram,
    texto: '@alvespianos',
    href: 'https://instagram.com/alvespianos',
    rotulo: 'Instagram @alvespianos, abre em nova aba',
  },
];

export function Contato({ enviado, onEnviado }: ContatoProps) {
  return (
    <Shell id="contato" tone="sunken">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr] md:gap-8">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <SectionHeading>
            Conte o que está acontecendo com o seu piano
          </SectionHeading>
          <p className={`mb-6 ${textStyle.body} text-ink-body`}>
            A avaliação é sem compromisso. Se der para resolver por telefone, a
            gente resolve por telefone.
          </p>
          <ul className="flex list-none flex-col gap-1 p-0">
            {CONTATOS.map(({ Icon, texto, href, rotulo }) => {
              const conteudo = (
                <>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex flex-none text-gold-500"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span>{texto}</span>
                </>
              );

              return (
                <li key={texto} className={`${textStyle.body} text-ink-body`}>
                  {href ? (
                    <a
                      href={href}
                      aria-label={rotulo}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="-mx-2 flex min-h-tap items-start gap-3 rounded-control px-2 py-2 text-ink-body no-underline transition-colors duration-fast ease-standard hover:text-ink-linkHover"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    <span className="flex min-h-tap items-start gap-3 py-2">
                      {conteudo}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rounded-card border border-border-hairline bg-surface-card p-4 shadow-sm sm:p-6">
          <FormularioContato enviado={enviado} onEnviado={onEnviado} />
        </div>
      </div>
    </Shell>
  );
}
