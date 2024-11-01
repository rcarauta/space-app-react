import styled from 'styled-components'
import tags from './tags.json'


const TagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 40px;
`

const ParagrafoTag = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    margin-right: 25px;
`

const BotaoTag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    margin-right: 8px;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = ({ aoFiltarImagem }) => {
    return (
    <TagContainer>
        <ParagrafoTag>Busque por tags:</ParagrafoTag>
        {tags.map(tag => <BotaoTag key={tag.id} onClick={() => aoFiltarImagem(tag)}>{tag.titulo}</BotaoTag>)}
    </TagContainer>
    )
}

export default Tags

