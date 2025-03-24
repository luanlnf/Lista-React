import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const FormContainer = styled.form`
  background: ${variaveis.Fundo};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-width: 400px;
  margin: 0 auto;
`
export const Titulo = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${variaveis.cinzaBorda};
`

export const Button = styled.button`
  background-color: ${variaveis.verdeBotao};
  color: ${variaveis.Fundo};
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.verdeBSegundo};
  }
`
export const Select = styled.select`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${variaveis.cinzaBorda};
`
export const MensagemSucesso = styled.p`
  background-color: ${variaveis.FundoMensagem};
  color: ${variaveis.letrasMensagem};
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-weight: bold;
`
