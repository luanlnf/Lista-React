import { useDispatch } from 'react-redux'
import { useState } from 'react'
import * as S from './styles'
import { Categoria, Contato } from '../../models/Contato'
import { removerContato, editarContato } from '../../store/reducers/contato'
import InputMask from 'react-input-mask'

type Props = {
  contato: Contato
}

const ContatoItem = ({ contato }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [telefone, setTelefone] = useState(contato.telefone)
  const [mensagem, setMensagem] = useState('')
  const [categoria, setCategoria] = useState(contato.categoria)

  const salvarEdicao = () => {
    if (!nome || !email || !telefone) {
      alert('Preencha todos os campos!')
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('E-mail inválido!')
      return
    }
    dispatch(
      editarContato({
        ...contato,
        nome,
        email,
        telefone,
        categoria
      })
    )
    setEstaEditando(false)
    setMensagem('Contato editado com sucesso!')
    setTimeout(() => setMensagem(''), 3000)
  }

  const cancelarEdicao = () => {
    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)
    setEstaEditando(false)
  }

  return (
    <S.Card>
      {mensagem && <S.MensagemSucesso>{mensagem}</S.MensagemSucesso>}
      {estaEditando ? (
        <>
          <S.Topo>
            <S.Input value={nome} onChange={(e) => setNome(e.target.value)} />
            <S.Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as Categoria)}
            >
              <option value="favorito">⭐ favorito</option>
              <option value="restaurante">🍔 restaurante</option>
              <option value="empresa">🏢 empresa</option>
              <option value="pessoal">👤 pessoal</option>
            </S.Select>
          </S.Topo>

          <S.Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputMask
            mask="(99) 99999-9999"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          >
            {(inputProps) => <S.Input {...inputProps} />}
          </InputMask>
        </>
      ) : (
        <>
          <S.Topo>
            <S.Nome>{contato.nome}</S.Nome>
            <S.Tag categoria={contato.categoria}>
              {contato.categoria === 'favorito' && '⭐ favorito'}
              {contato.categoria === 'restaurante' && '🍔 restaurante'}
              {contato.categoria === 'empresa' && '🏢 empresa'}
              {contato.categoria === 'pessoal' && '👤 pessoal'}
            </S.Tag>
          </S.Topo>

          <S.Email>{contato.email}</S.Email>
          <S.Telefone>{contato.telefone}</S.Telefone>
        </>
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoRemover
              onClick={() => dispatch(removerContato(contato.id))}
            >
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default ContatoItem
