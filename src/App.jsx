import styled from "styled-components"
import EstiloGlobal from "./componentes/EstiloGlobal"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
   background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
   width: 100%;
   min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;

`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos.map(foto => {
    return {
      ...foto,
      filtro: true
    }
  }))
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id){
        setFotoSelecionada({
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        })
    }
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  const aoFiltarImagem =(tag)=> {
      setFotosGaleria(fotosGaleria.map(fotoGaleria => {
        let aparecer = true;

        if(tag.id === 0 ) {
          aparecer = true
        } else if (Number(fotoGaleria.tagId) === tag.id) {
          aparecer = true
        } else {
          aparecer = false
        }

        return {
          ...fotoGaleria,
          filtro: aparecer
        }
      }))
  }

  return (
    <FundoGradiente>
        <EstiloGlobal />
        <AppContainer>
          <Cabecalho />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner>
                texto do banner de fundo
              </Banner>
              <Galeria 
                aoFiltarImagem={aoFiltarImagem}
                aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                aoAlternarFavorito={aoAlternarFavorito}
                fotos={fotosGaleria} 
              />
            </ConteudoGaleria>
          </MainContainer>    
        </AppContainer>
        <ModalZoom 
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
        foto={fotoSelecionada}/>
    </FundoGradiente>
  )
}

export default App
