import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  padding: 32px;
`

export const Voltar = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  text-decoration: none;
  color: ${variaveis.azul};
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`
