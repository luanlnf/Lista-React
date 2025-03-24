import { useDispatch } from 'react-redux'
import { adicionarContato } from '../../store/reducers/contato'
import { useState } from 'react'
import * as S from './styles'
import { v4 as uuidv4 } from 'uuid'
import { Categoria } from '../../models/Contato'
import InputMask from 'react-input-mask'

const ContatoForm = () => {
  const dispatch = useDispatch()
  const [mensagem, setMensagem] = useState('')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categoria, setCategoria] = useState<Categoria>('pessoal')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome || !email || !telefone) {
      alert('Preencha todos os campos!')
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('E-mail inválido!')
      return
    }

    dispatch(
      adicionarContato({
        id: uuidv4(),
        nome,
        email,
        telefone,
        categoria,
        interacoes: 0
      })
    )

    setNome('')
    setEmail('')
    setTelefone('')
    setCategoria('pessoal')
    setMensagem('Contato adicionado com sucesso!')
    setTimeout(() => setMensagem(''), 3000)
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      {mensagem && <S.MensagemSucesso>{mensagem}</S.MensagemSucesso>}
      <S.Titulo>Adicionar Contato</S.Titulo>
      <S.Input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <S.Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputMask
        placeholder="(99) 99999-9999"
        mask="(99) 99999-9999"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      >
        {(inputProps) => <S.Input {...inputProps} />}
      </InputMask>

      <S.Select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value as Categoria)}
      >
        <option value="pessoal">Pessoal</option>
        <option value="favorito">Favorito</option>
        <option value="restaurante">Restaurante</option>
        <option value="empresa">Empresa</option>
      </S.Select>

      <S.Button type="submit">Salvar</S.Button>
    </S.FormContainer>
  )
}

export default ContatoForm
