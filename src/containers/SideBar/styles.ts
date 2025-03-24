import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

interface CardProps {
  selecionado: boolean
}

export const Carde = styled.div<CardProps>`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  background-color: ${variaveis.Fundo};
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  border: ${({ selecionado }) => (selecionado ? '2px solid #007bff' : 'none')};
  color: ${({ selecionado }) => (selecionado ? '#007bff' : '#000')};
  font-weight: ${({ selecionado }) => (selecionado ? 'bold' : 'normal')};
  transition: all 0.2s;
  cursor: pointer;
`

export const Titulo = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  border: 1px solid ${variaveis.cinzaBorda};
  border-radius: 4px;
  font-size: 14px;
`

export const EstatisticasContainer = styled.aside`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 32px;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  background-color: ${variaveis.Fundo};
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 4px;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: ${variaveis.letras};
  }
`
