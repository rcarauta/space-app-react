import styled from "styled-components";


const Titulo = styled.h2`
    color: #7878E6;
    font-size: 32px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

export default Titulo