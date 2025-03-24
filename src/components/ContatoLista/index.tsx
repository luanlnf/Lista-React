import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ContatoItem from '../ContatoItem'
import * as S from './styles'
import { BotaoFlutuante } from '../../styles'

type Props = {
  termoBusca: string
  categoriaSelecionada: string
}
const ContatoLista = ({ termoBusca, categoriaSelecionada }: Props) => {
  const contatos = useSelector((state: RootState) => state.contatos)

  const contatosFiltrados = contatos
    .filter((contato) =>
      contato.nome.toLowerCase().includes(termoBusca.toLowerCase())
    )
    .filter((contato) =>
      categoriaSelecionada === 'todas'
        ? true
        : contato.categoria === categoriaSelecionada
    )

  return (
    <S.ListaContainer>
      <S.Topo>
        <h2>Contatos</h2>
        <BotaoFlutuante to="/cadastro">+</BotaoFlutuante>
      </S.Topo>
      <S.ContatosArea>
        {contatosFiltrados.map((contato) => (
          <ContatoItem key={contato.id} contato={contato} />
        ))}
      </S.ContatosArea>
    </S.ListaContainer>
  )
}

export default ContatoLista
