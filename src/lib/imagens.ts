/**
 * Registro das fotos do site.
 *
 * PROVISÓRIO: nenhuma destas imagens é da Alves Pianos. São fotos de acervo
 * livre (Openverse/Flickr/Wikimedia) escolhidas só para dimensionar e vestir o
 * layout — os instrumentos mostrados NÃO são os do acervo, e a oficina não é
 * a da marca. Substituir por fotografia própria antes de publicar; ao trocar,
 * apague também a entrada correspondente da página de créditos.
 *
 * Cada entrada carrega largura e altura reais (o `next/image` precisa delas
 * para reservar o espaço e não empurrar o texto quando a foto chega) e um
 * `blurDataURL` de 16px embutido, que é o que aparece enquanto a imagem
 * carrega — no celular, em rede fraca, é a diferença entre um buraco branco e
 * uma mancha com a cor certa.
 *
 * Gerado a partir dos arquivos em `public/images/`.
 */

export interface CreditoImagem {
  titulo: string;
  autor: string;
  licenca: string;
  licencaUrl: string;
  origem: string;
}

export interface Imagem {
  src: string;
  width: number;
  height: number;
  /** Texto alternativo descritivo, em português. */
  alt: string;
  blurDataURL: string;
  credito: CreditoImagem;
}

export const IMAGENS = {
  "hero-oficina": {
    src: "/images/hero-oficina.jpg",
    width: 1600,
    height: 1200,
    alt: "Interior de um piano de cauda aberto: a placa dourada, os cravelhames e as cordas graves cruzadas",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABAv/EACMQAAICAgECBwAAAAAAAAAAAAECAxEAIQQFURIxMkJhgdH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAQEBAQAAAAAAAAAAAAAAAAERACH/2gAMAwEAAhEDEQA/ABcgPzY41dlSFRYWKz9nMbpicZQ1lz5im/M5kWXpfKKS2ISaJX2nuPjFkkR0dRNulPq7HJNGap0piQByzgTmOq149byw3KUGWkcihsBScsUuNDf/2Q==",
    credito: {
      titulo: "Steinway grand piano interior",
      autor: "Kjethdubns",
      licenca: "CC0 1.0",
      licencaUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      origem: "https://commons.wikimedia.org/w/index.php?curid=20164563",
    },
  },
  "sobre-bancada": {
    src: "/images/sobre-bancada.jpg",
    width: 1024,
    height: 768,
    alt: "Detalhe do entalhe em madeira maciça na frente de um piano vertical antigo",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDASEAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EACIQAAICAQIHAQAAAAAAAAAAAAECAAMRFDESIkNRYXGBkf/EABYBAQEBAAAAAAAAAAAAAAAAAAMFAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABETEhQf/aAAwDAQACEQMRAD8AjdXXqcKgIXPySYKemsnKv0r2IwBexHpoiB2lbimps5gV4RnM5JDHcHzDVF3QoB3A/Im+htI//9k=",
    credito: {
      titulo: "Straube 1901 Upright Piano",
      autor: "nwclassicyacht",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/12559296@N03/12597627465",
    },
  },
  "srv-afinacao-1": {
    src: "/images/srv-afinacao-1.jpg",
    width: 960,
    height: 720,
    alt: "Ferramentas de afinação sobre a bancada: chave de afinação, feltro, cunhas e alicate",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EACMQAAIBAgUFAQAAAAAAAAAAAAECAAMREhMhQXEEIjFhkaH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAgP/xAAZEQADAQEBAAAAAAAAAAAAAAAAARECAzH/2gAMAwEAAhEDEQA/AE1VdPFrezFmlVwhzl4TtmAH5NdWGzHFuDJXYbk3hsV+jemVmRjmFJlDIcF2PazX00ttzCRlgDp+wlwxP//Z",
    credito: {
      titulo: "Piano tuning tools",
      autor: "Adjwilley",
      licenca: "CC BY-SA 3.0",
      licencaUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      origem: "https://commons.wikimedia.org/w/index.php?curid=24449835",
    },
  },
  "srv-afinacao-2": {
    src: "/images/srv-afinacao-2.jpg",
    width: 1000,
    height: 667,
    alt: "Fileira de abafadores e cordas de um piano aberto, vistos de perfil",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASEAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDAv/EACUQAAICAQIEBwAAAAAAAAAAAAECAxEAEjEEISJBExRRYXGR8P/EABcBAAMBAAAAAAAAAAAAAAAAAAABBAP/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIREnH/2gAMAwEAAhEDEQA/AH5qELVZhnVhqbpXt6nfJ1G3RVKWUKOEMTLfhRqe3c/qwzfhN0IoEVtMCF5SpYWN65msqvDRx9Ux1saIUfHMN94kqG3pkeIlAobk7D2wwA//2Q==",
    credito: {
      titulo: "Piano strings",
      autor: "kevin dooley",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/12836528@N00/6399773133",
    },
  },
  "srv-restauro-1": {
    src: "/images/srv-restauro-1.jpg",
    width: 1000,
    height: 750,
    alt: "Martelos de feltro alinhados na mecânica de um piano aberto sobre a bancada",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAIxAAAgICAQIHAAAAAAAAAAAAAQIAAwQREhMxISIzQmJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOMK6/cHWX6VGvV/QZoOdlsuiQw38pK52V47830GkNyFyjhLxpcMGOySIRWXbZeym1eZHbuNQhkLa//Z",
    credito: {
      titulo: "Weinbach piano action hammers",
      autor: "Adrian Tync",
      licenca: "CC BY-SA 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      origem: "https://commons.wikimedia.org/w/index.php?curid=115611843",
    },
  },
  "srv-restauro-2": {
    src: "/images/srv-restauro-2.jpg",
    width: 1000,
    height: 1000,
    alt: "Marchetaria de instrumentos em madeiras claras aplicada à tampa de um piano restaurado",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABADAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBf/EACAQAAICAgEFAQAAAAAAAAAAAAEDAhEABBIhMUFCYXL/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAZEQADAQEBAAAAAAAAAAAAAAAAASFBEQL/2gAMAwEAAhEDEQA/AMvWVGIHJZI+HvgtvB0kPsIUyyoGJq6Pg5ee6T5hPpoZIipLH7NYtDgHKZEm+EuvrmU2H//Z",
    credito: {
      titulo: "Mandolin and tamborine inlay on the music box",
      autor: "guano",
      licenca: "CC BY-SA 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      origem: "https://www.flickr.com/photos/97838323@N00/2397668780",
    },
  },
  "srv-venda-1": {
    src: "/images/srv-venda-1.jpg",
    width: 1000,
    height: 750,
    alt: "Piano de cauda de madeira escura, tampa levantada, pronto para entrega",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA5gDmAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAADBf/EACIQAAIBAwQCAwAAAAAAAAAAAAECAwAEERIhMUEUUSKhwf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERcf/aAAwDAQACEQMRAD8A5VwfDnCuULpygY/e1GjlJlZshNR37xSbl7RrqUl2z2GUHfPv1WUTqScRRMAeiR+0OHJCCI2A0tnFVGLyB2MfxBPHNVJMf//Z",
    credito: {
      titulo: "Everett Baby Grand Piano - front",
      autor: "Daryl Durand",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://commons.wikimedia.org/w/index.php?curid=25458387",
    },
  },
  "srv-venda-2": {
    src: "/images/srv-venda-2.jpg",
    width: 1000,
    height: 667,
    alt: "Teclado antigo em close: teclas de marfim gastas pelo uso e sustenidos de ébano",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACcQAAIBAwMACwAAAAAAAAAAAAECAwAEERITIQUxMkFRYZGSseHw/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//EABkRAAMBAQEAAAAAAAAAAAAAAAABERICYf/aAAwDAQACEQMRAD8AxiytNbAOpVIMlhJwz4zgH04qNOwcIwwxCN9zUGUqwXXguucMB59Rp2gNLawKQVlLqHKsVIOV7mA/ciigEXUEcAUxsTnPZFZ46fVpelBh0guzgWspYPqDEAceHzWmfSaEXTONIiX3fVTEiqf/2Q==",
    credito: {
      titulo: "Antique wooden keys",
      autor: "quinet",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/91994044@N00/6814988816",
    },
  },
  "piano-essenfelder": {
    src: "/images/piano-essenfelder.jpg",
    width: 1000,
    height: 837,
    alt: "Piano vertical antigo em madeira avermelhada, com entalhes na frente e teclado à mostra",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABMDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBv/EACAQAAIBBAMAAwAAAAAAAAAAAAECEQADBAUTITESQXL/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQF/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAREiH/2gAMAwEAAhEDEQA/AFbS4w2V4ByBM9NH1UjvI6cz+zTtlzpmvwFmDAOYWYmplbNaYF0ge9VEHM2lsBi0mutscCyVHzBX2faKThYaPh2nZSxZZJLx2aKO0hO3/9k=",
    credito: {
      titulo: "Straube 1901 Upright Piano",
      autor: "nwclassicyacht",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/12559296@N03/12598062024",
    },
  },
  "piano-dobbert": {
    src: "/images/piano-dobbert.jpg",
    width: 1000,
    height: 667,
    alt: "Piano vertical aberto: cordas cruzadas, mecânica e teclado visíveis de frente",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIREgADBFETITFBgf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/xAAaEQEBAQADAQAAAAAAAAAAAAABABESITFB/9oADAMBAAIRAxEAPwDK0rpElzrYE+i9vj8zNF8tByeNJWq+A9AWw4M+RRckIpEAL3WcoEoXZNGxSii6rA+1nE59qGa4UEryE99IcOo2k5O+83IY9xGMzulb/9k=",
    credito: {
      titulo: "Details of an Open Upright Piano (51911275423)",
      autor: "Dejan Krsmanovic",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://commons.wikimedia.org/w/index.php?curid=134047220",
    },
  },
  "piano-yamaha": {
    src: "/images/piano-yamaha.jpg",
    width: 1000,
    height: 750,
    alt: "Teclas brancas e sustenidos de um piano vertical em close, sob luz lateral",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDASEAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFA//EACcQAAEDAgQFBQAAAAAAAAAAAAEAAgMEERIxMuEFBhMUIRYiI0Fx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AITqCpaQDGbluI2yCHUFQI2v6Z92Y+x+qNUoo6ryBA64zQhVX1BGQ4dvmLatk55ijJJ7YeW21bKoyl45HJh+ACwtq2QkH//Z",
    credito: {
      titulo: "keys worn out with time",
      autor: "emsiekins.",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/22633920@N05/3373718157",
    },
  },
  "piano-schiedmayer": {
    src: "/images/piano-schiedmayer.jpg",
    width: 1000,
    height: 669,
    alt: "Interior de um piano de meia cauda aberto, com a placa dourada e o cravelhame",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAIRAAAgICAQQDAAAAAAAAAAAAAQIAEQMhEhMyQbEEYaH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AOAQGcOy0DocRQNS/STIe5AftiI7DlUZWZggAXiNetxrZsLqVYA3VeP2CqS5tlHwKUv3AeUYGoSMz9K6YgXoa9iE0WsL/9k=",
    credito: {
      titulo: "Inside a baby grand",
      autor: "Valerie Everett",
      licenca: "CC BY-SA 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      origem: "https://www.flickr.com/photos/66742614@N00/321641474",
    },
  },
  "piano-steinway": {
    src: "/images/piano-steinway.jpg",
    width: 1000,
    height: 773,
    alt: "Piano de cauda do século XIX com estante ornamentada e castiçais de latão",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABUDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQQFBv/EACQQAAEEAQMDBQAAAAAAAAAAAAECAwQRABIhMQUTFDJiscHR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACEf/aAAwDAQACEQMRAD8AzkaIp5IUQaJoYXQSMrNPdNdMfWHBSB6eKyGpOac4gtrKSODtjs+cqyfHiNoU7GQ5vV2b+cyNK8t9ZA7FybE0bQUEK9x/cR2CEhI7a1goaDYrgE/eU7RC/9k=",
    credito: {
      titulo: "Streicher 1869 Grand Piano",
      autor: "kkmarais",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/29946195@N07/9018484719",
    },
  },
  "piano-antiga": {
    src: "/images/piano-antiga.jpg",
    width: 1000,
    height: 671,
    alt: "Piano antigo com a tampa aberta, teclas amareladas e madeira desgastada",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABcQERQRDhcUEhQaGBcbIjklIh8fIkYyNSk5UkhXVVFIUE5bZoNvW2F8Yk5QcptzfIeLkpSSWG2grJ+OqoOPko3/2wBDARgaGiIeIkMlJUONXlBejY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY3/wAARCAAQABgDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBv/EACgQAAIBAwEFCQAAAAAAAAAAAAECAwAEEQUGEiExQRQVQlFhcYGRkv/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQBhESH/2gAMAwEAAhEDEQA/AExd5TaeEhgYJzDlxxHtmpc/a4GxJGUHrHVOeObTSgtmK9MZz9jzp1rtGgAjuo908iy8R8iojlZOWfeV38Y/OKKoavdxSXRaNImjKjG6OvWimPkE2//Z",
    credito: {
      titulo: "Old piano",
      autor: "Thomas Beck Photo",
      licenca: "CC BY 2.0",
      licencaUrl: "https://creativecommons.org/licenses/by/2.0/",
      origem: "https://www.flickr.com/photos/39195673@N00/2542977658",
    },
  },
} as const satisfies Record<string, Imagem>;

export type ImagemId = keyof typeof IMAGENS;

/** Lista para a página de créditos, em ordem alfabética de arquivo. */
export const CREDITOS = Object.entries(IMAGENS)
  .map(([id, imagem]) => ({ id, ...imagem.credito, alt: imagem.alt }))
  .sort((a, b) => a.id.localeCompare(b.id));
