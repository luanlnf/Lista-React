import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

type Props = {
  termoBusca: string
  setTermoBusca: (valor: string) => void
  categoriaSelecionada: string
  setCategoriaSelecionada: (categoria: string) => void
}

const Sidebar = ({
  termoBusca,
  setTermoBusca,
  categoriaSelecionada,
  setCategoriaSelecionada
}: Props) => {
  const contatos = useSelector((state: RootState) => state.contatos)

  return (
    <>
      <S.EstatisticasContainer>
        <S.Titulo>Buscar Contato</S.Titulo>
        <S.Input
          type="text"
          placeholder="Digite um nome..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />

        <S.Carde
          onClick={() => setCategoriaSelecionada('todas')}
          selecionado={categoriaSelecionada === 'todas'}
        >
          <h3>Total</h3>
          <p>{contatos.length} contatos</p>
        </S.Carde>

        <S.Carde
          onClick={() => setCategoriaSelecionada('favorito')}
          selecionado={categoriaSelecionada === 'favorito'}
        >
          <h3>Favoritos</h3>
          <p>{contatos.filter((c) => c.categoria === 'favorito').length}</p>
        </S.Carde>

        <S.Carde
          onClick={() => setCategoriaSelecionada('restaurante')}
          selecionado={categoriaSelecionada === 'restaurante'}
        >
          <h3>Restaurantes</h3>
          <p>{contatos.filter((c) => c.categoria === 'restaurante').length}</p>
        </S.Carde>

        <S.Carde
          onClick={() => setCategoriaSelecionada('empresa')}
          selecionado={categoriaSelecionada === 'empresa'}
        >
          <h3>Empresas</h3>
          <p>{contatos.filter((c) => c.categoria === 'empresa').length}</p>
        </S.Carde>
      </S.EstatisticasContainer>
    </>
  )
}

export default Sidebar
