import ContatoForm from '../../components/ContatoForm'
import * as S from './styles'

const Cadastro = () => {
  return (
    <S.Container>
      <S.Voltar to="/">&larr; Voltar Para Contatos</S.Voltar>
      <ContatoForm />
    </S.Container>
  )
}

export default Cadastro
