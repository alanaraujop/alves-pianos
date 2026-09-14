export type PianoTipo = "vertical" | "cauda" | "restaurar";
export type PianoEstado = "Restaurado" | "Disponível" | "Em restauro";

export interface Piano {
  nome: string;
  tipo: PianoTipo;
  estado: PianoEstado;
  preco: string;
  descricao: string;
}

/**
 * Conteúdo fictício, herdado do kit de referência — nomes, preços e estado
 * servem apenas para dimensionar o layout. Substituir por dados reais do
 * acervo antes de qualquer publicação.
 */
export const ACERVO: Piano[] = [
  { nome: "Essenfelder 1962", tipo: "vertical", estado: "Restaurado", preco: "R$ 14.800", descricao: "Jacarandá, mecanismo revisado, cordas novas." },
  { nome: "Fritz Dobbert 1978", tipo: "vertical", estado: "Disponível", preco: "R$ 8.400", descricao: "Estudo, teclado regulado, afinação inclusa." },
  { nome: "Yamaha U1 1989", tipo: "vertical", estado: "Restaurado", preco: "R$ 22.000", descricao: "Clássico de estudo, som firme e teclado leve." },
  { nome: "Schiedmayer 1911", tipo: "cauda", estado: "Em restauro", preco: "sob consulta", descricao: "Meia cauda alemã, tampo original em recuperação." },
  { nome: "Steinway S 1954", tipo: "cauda", estado: "Restaurado", preco: "sob consulta", descricao: "Cauda curta, revisão completa de mecânica." },
  { nome: "Antiga alemã s/ marca", tipo: "restaurar", estado: "Em restauro", preco: "R$ 4.200", descricao: "Peça para quem quer acompanhar o restauro." },
];

export const ACERVO_FILTROS: { value: "todos" | PianoTipo; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "vertical", label: "Verticais" },
  { value: "cauda", label: "Caudas" },
  { value: "restaurar", label: "A restaurar" },
];
