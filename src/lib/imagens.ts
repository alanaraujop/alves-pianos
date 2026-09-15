/**
 * Registro das fotos do site.
 *
 * PROVISÓRIO: as fotos aqui são temporárias e serão substituídas antes da
 * publicação final. Parte já é fotografia da oficina; as entradas `piano-*` e
 * `srv-venda-*` ainda são imagens de acervo de terceiros, e por isso não
 * devem ir ao ar como estão. Ao trocar um arquivo, regenere `width`,
 * `height` e `blurDataURL` e reescreva o `alt` para a foto nova.
 *
 * `width`/`height` são as dimensões reais do arquivo. O `Foto` renderiza com
 * `fill`, então quem manda na proporção da caixa é o CSS — estes números não
 * chegam ao `next/image` hoje; ficam como registro do arquivo, que é o que
 * denuncia uma foto trocada por outra de recorte diferente.
 *
 * O `blurDataURL` é um JPEG de 16px de altura embutido, o que aparece
 * enquanto a imagem carrega — no celular, em rede fraca, é a diferença entre
 * um buraco branco e uma mancha com a cor certa.
 *
 * Gerado a partir dos arquivos em `public/images/`.
 */

export interface Imagem {
  src: string;
  width: number;
  height: number;
  /** Texto alternativo descritivo, em português. */
  alt: string;
  blurDataURL: string;
}

export const IMAGENS = {
  'hero-oficina': {
    src: '/images/hero-oficina.jpg',
    width: 1440,
    height: 1440,
    alt: 'Piano de cauda aberto na oficina, com a mecânica e o teclado retirados e apoiados ao lado; ao centro, a placa dourada e as cordas à mostra',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRITISIxUYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIRAAP/2gAMAwEAAhEDEQA/AB79YOQ8DO1upGYlyQv3ut20+1kQFY27XORIcAftI3UMdnpUohTHjtXr7VPacdpEh9bFU4o3JWAZOca7/9k=',
  },
  'sobre-bancada': {
    src: '/images/sobre-bancada.jpg',
    width: 1271,
    height: 1238,
    alt: 'Fotografia antiga em preto e branco: um jovem técnico debruçado sobre a bancada, ajustando a mecânica de um piano',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBf/EACAQAAIBBAIDAQAAAAAAAAAAAAECAwAEERIhQTEycWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvbNdPJs4CxKp218/achlNvmZ13OfRsjHRrKiu35AcI2uCzE5ahLh44CrbKxHYB/R8HNB/9k=',
  },
  'srv-afinacao-1': {
    src: '/images/srv-afinacao-2.jpg',
    width: 1254,
    height: 1254,
    alt: 'Chave de afinação encaixada num cravelho de piano de cauda, entre as cordas e o teclado, em preto e branco',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAE/8QAIRAAAgEEAgIDAAAAAAAAAAAAAQIDAAQRIQVhEjFBgfD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AMhtbVsh0C42XAyKrhYy5jSNAQM6A0O/31WK45KSdfAKscY9KvxSPG2kl40ccaGONjkZOz21B/9k=',
  },
  'srv-afinacao-2': {
    src: '/images/srv-afinacao-1.jpg',
    width: 1440,
    height: 1440,
    alt: 'Dois técnicos trabalhando num piano vertical aberto sob a luz de um foco de bancada',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIF/8QAIBAAAgEDBQEBAAAAAAAAAAAAAQIDAAQREhMhIzEFUf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAABABES/9oADAMBAAIRAxEAPwAMNzmUo5aORMhtw4HPnFI+pHHbxL2h3IBIA4rCEk8Tbi6ix9ZhqqmvHkfvAkH5nFF6XdkIF//Z',
  },
  'srv-restauro-1': {
    src: '/images/srv-restauro-1.jpg',
    width: 1440,
    height: 1440,
    alt: 'Técnico de boné e lanterna de cabeça ajustando a mecânica de um piano aberto, com as teclas à mostra',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAB/8QAIhAAAgIBBAEFAAAAAAAAAAAAAQIDEQAEEiFBMSIyUXGx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANbQywxxoZjIhb0P7k+mB8YXXRLo5Q0N7a2tZHB6PHXWW12leMT2kYElBvPIr9xWrWN42MnPzZqwcD//2Q==',
  },
  'srv-restauro-2': {
    src: '/images/srv-restauro-2.jpg',
    width: 1080,
    height: 1088,
    alt: 'Restaurador lixando a caixa de um piano de cauda desmontado, apoiado em cavaletes na oficina',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAiEAACAQMDBQEAAAAAAAAAAAABAwIABBESIUETFCIxUWL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECERIx/9oADAMBAAIRAxEAPwArrCS3FVmSJYyRLk4++qnut3IlpYTEx/VVUQcx56EdUTLXuT47YyOPtJdZBkB3AzPk0MtMeo1w/9k=',
  },
  'srv-venda-1': {
    src: '/images/srv-venda-1.jpg',
    width: 1000,
    height: 750,
    alt: 'Piano de cauda de madeira escura, tampa levantada, pronto para entrega',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABYDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAF/8QAIhAAAgIBBAEFAAAAAAAAAAAAAQIDEQAEEiExQRMUIlGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAYEQEBAAMAAAAAAAAAAAAAAAAAAREhMf/aAAwDAQACEQMRAD8AyNYPZThXKFlN7AxsjsXxhFmLah5RSbz55rGa19G+tlLSNu5sMm75X4P1h43QsQIomAPYJF/uCc0ckJPpOgp7rs+csM0jrKzRAIOtveWJMP/Z',
  },
  'srv-venda-2': {
    src: '/images/srv-venda-2.jpg',
    width: 1000,
    height: 837,
    alt: 'Piano vertical antigo em madeira avermelhada, com entalhes na frente e o teclado à mostra',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABMDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBv/EACIQAAICAgIBBQEAAAAAAAAAAAECAxEABAUSISIxMmFy0f/EABcBAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAYEQEBAAMAAAAAAAAAAAAAAAABABESIf/aAAwDAQACEQMRAD8ATy0jryU6h2A7X4ahkcklgU7A/s/3HcoZ496QQFmDU5pQav7yRX3XuhKa9/TkIczamwGLU8ZGzcfCVHcFfld3hiNDRjk0oXcMzMvYnvXk4YdpCdv/2Q==',
  },
  'piano-essenfelder': {
    src: '/images/piano-essenfelder.jpg',
    width: 1000,
    height: 837,
    alt: 'Piano vertical antigo em madeira avermelhada, com entalhes na frente e teclado à mostra',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABMDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBv/EACIQAAICAgIBBQEAAAAAAAAAAAECAxEABAUSISIxMmFy0f/EABcBAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAYEQEBAAMAAAAAAAAAAAAAAAABABESIf/aAAwDAQACEQMRAD8ATy0jryU6h2A7X4ahkcklgU7A/s/3HcoZ496QQFmDU5pQav7yRX3XuhKa9/TkIczamwGLU8ZGzcfCVHcFfld3hiNDRjk0oXcMzMvYnvXk4YdpCdv/2Q==',
  },
  'piano-dobbert': {
    src: '/images/piano-dobbert.jpg',
    width: 1000,
    height: 667,
    alt: 'Piano vertical aberto: cordas cruzadas, mecânica e teclado visíveis de frente',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABBf/EAB8QAAIBBQADAQAAAAAAAAAAAAECEgADBBEhFDFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDj2EsjZc2nBPC8vXz1SI2SsV8cn4BKiY91SiCaLoe2XdImFBK5Cd/ENTyK6HlhFI0qr3sd1VmXkT3Mhzo9jqqlAr//2Q==',
  },
  'piano-yamaha': {
    src: '/images/piano-yamaha.jpg',
    width: 1000,
    height: 750,
    alt: 'Teclas brancas e sustenidos de um piano vertical em close, sob luz lateral',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABYDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUCBv/EACgQAAEDAgQEBwAAAAAAAAAAAAEAAhEDBAUUITEGEjLhExYiJEFR0f/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDnjh10CxppGXCdNYQ4fcCi2p4Rg/Gsx9qv5lo+r227Y6uy0OJqMg5bZsdXZDVQ8ldAkC3eSEVl/ENJzGNy8Fo35h+IlV//2Q==',
  },
  'piano-schiedmayer': {
    src: '/images/piano-schiedmayer.jpg',
    width: 1000,
    height: 669,
    alt: 'Interior de um piano de meia cauda aberto, com a placa dourada e o cravelhame',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABgDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAb/xAAjEAACAgEDAwUAAAAAAAAAAAABAgMRABITIQVBYTEyUYGh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARAv/aAAwDAQACEQMRAD8AzjAM4kZaDcDQKU18ZPZjlPBS/L1j4JVErMwQKq6RY7+Occ80DqVdVbUBXoP3AVJs2pjpxCl/cB3RgawwmfZvSxAvgCrP2MM0eqwv/9k=',
  },
  'piano-steinway': {
    src: '/images/piano-steinway.jpg',
    width: 1000,
    height: 773,
    alt: 'Piano de cauda do século XIX com estante ornamentada e castiçais de latão',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUG/8QAJBAAAgICAQEJAAAAAAAAAAAAAQIDBAARIRIFExQyYWKRsdH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABkRAAIDAQAAAAAAAAAAAAAAAAARAQISIf/aAAwDAQACEQMRAD8A5erSadQxB0W0Mbn7LmNfrDjpQeTWgMuXw1OONpqyS862GbfxvJlvUu74oIQ3vb9ybZXK4YssZjkKkHg8euGM2RFI4KRCNdcKCT94Y2Can//Z',
  },
  'piano-antiga': {
    src: '/images/piano-antiga.jpg',
    width: 1000,
    height: 671,
    alt: 'Piano antigo com a tampa aberta, teclas amareladas e madeira desgastada',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABgDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAlEAACAQIFAwUAAAAAAAAAAAABAgMABAUREiExBkFxFUNRgZL/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGREBAQADAQAAAAAAAAAAAAAAAQARIWEx/9oADAMBAAIRAxEAPwCCL1SbDlSC3dU5Vy43HjOlFwbu3bKSPQM+8dNp47jCigtmZe2nMEHyPmrFp1PEVEd3FoPBYbr9igHk6YszJNI/uL+cqKZ43dwPdkxxxNEyKRoA3PfiikHXkadv/9k=',
  },
} as const satisfies Record<string, Imagem>;

export type ImagemId = keyof typeof IMAGENS;
