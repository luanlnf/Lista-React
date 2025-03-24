export type Categoria = 'favorito' | 'restaurante' | 'empresa' | 'pessoal'

export type Contato = {
  id: string
  nome: string
  email: string
  telefone: string
  categoria: Categoria
  interacoes: number
}
