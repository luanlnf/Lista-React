import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
interface TagProps {
  categoria: string
}

export const Card = styled.div`
  background: ${variaveis.Fundo};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
`

export const Nome = styled.h3`
  margin-bottom: 4px;
`

export const Email = styled.p`
  color: #666;
  margin-bottom: 4px;
`

export const Telefone = styled.p`
  color: ${variaveis.letras};
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid ${variaveis.cinzaBorda};
  border-radius: 4px;
`

export const BarraAcoes = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`

export const BotaoEditar = styled.button`
  background: ${variaveis.verdeBotao};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`

export const BotaoSalvar = styled(BotaoEditar)`
  background: ${variaveis.BotaoEditar};
`

export const BotaoCancelar = styled(BotaoEditar)`
  background: ${variaveis.BotaoRemover};
`

export const BotaoRemover = styled(BotaoEditar)`
  background: ${variaveis.BotaoRemover};
`
export const MensagemSucesso = styled.p`
  background-color: ${variaveis.FundoMensagem};
  color: ${variaveis.letrasMensagem};
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-weight: bold;
`
export const Topo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Select = styled.select`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${variaveis.cinzaBorda};
  font-size: 12px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border: 20%;
  background-color: ${({ categoria }) => {
    switch (categoria) {
      case 'favorito':
        return '#28a745'
      case 'restaurante':
        return '#17a2b8'
      case 'empresa':
        return '#ffc107'
      case 'pessoal':
        return '#6c757d'
      default:
        return '#999'
    }
  }};
`
