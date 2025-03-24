import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { GlobalStyle, Container, BotaoFlutuante } from './styles'
import ContatoLista from './components/ContatoLista'
import Sidebar from './containers/SideBar'
import Cadastro from './containers/cadastro'

const App = () => {
  const [termoBusca, setTermoBusca] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas')

  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Sidebar
                termoBusca={termoBusca}
                setTermoBusca={setTermoBusca}
                categoriaSelecionada={categoriaSelecionada}
                setCategoriaSelecionada={setCategoriaSelecionada}
              />

              <ContatoLista
                termoBusca={termoBusca}
                categoriaSelecionada={categoriaSelecionada}
              />
            </Container>
          }
        />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  )
}

export default App
