import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"


const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoFiltarImagem }) =>{
    return (
        <>
            <Tags aoFiltarImagem={aoFiltarImagem} />    
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    <ImagensContainer>
                         {fotos.map(foto => <Imagem 
                            key={foto.id}
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            foto={foto} />)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
            
        </>
    )
}

export default Galeria