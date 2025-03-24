import styled from 'styled-components'

export const ListaContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Titulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  background-color: #f0f2f5;
  z-index: 1;
  padding: 8px 0;
`

export const ContatosArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(100vh - 150px); // ajusta o tamanho para tela
  overflow-y: auto;
  padding-right: 8px;
`
export const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
