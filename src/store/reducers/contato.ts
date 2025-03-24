import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contato } from '../../models/Contato'

const initialState: Contato[] = [
  {
    id: '1',
    nome: 'Luan Ferreira',
    email: 'luan@email.com',
    telefone: '47988887777',
    categoria: 'favorito',
    interacoes: 5
  },
  {
    id: '2',
    nome: 'Sandra Regina',
    email: 'sandra@email.com',
    telefone: '47999998888',
    categoria: 'restaurante',
    interacoes: 3
  },
  {
    id: '3',
    nome: 'Carlos Lima',
    email: 'carlos@email.com',
    telefone: '47981112233',
    categoria: 'empresa',
    interacoes: 7
  },
  {
    id: '4',
    nome: 'Júlia Souza',
    email: 'julia@email.com',
    telefone: '47982223344',
    categoria: 'pessoal',
    interacoes: 1
  }
]

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<string>) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) state[index] = action.payload
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions
export default contatosSlice.reducer
