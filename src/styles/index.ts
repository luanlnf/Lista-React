import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
  }

  body {
    background-color: #f0f2f5;
    padding: 20px;
    overflow: hidden;
  }

`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
  padding: 32px;
  min-height: 100vh;
`

export const BotaoFlutuante = styled(Link)`
  position: fixed;
  top: 24px;
  right: 24px;
  background-color: #007bff;
  color: white;
  font-size: 32px;
  padding: 8px 16px;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default GlobalStyle
