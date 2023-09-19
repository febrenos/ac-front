import styled from 'styled-components';
import BgLogoCut from '../../assets/img/cutOutLogo.png'
import BgLogo from '../../assets/img/whiteLogo.png'

export const PageContent  = styled.div`
    display:flex;
    height:100%;
    @media(width < 768px){
        flex-direction:column;
    }
`

export const Left  = styled.div`
    display:flex;
    width:40%;
    height:100%;
    justify-content:flex-end;
    align-items:center;
    background: var(--bg-theme-color);
    @media(width < 768px){
        width:100%;
        height:15%;
        padding:10px;
    }
`;

export const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:center;
    height:100%;
    background: var(--bg-color);
`
export const BgImage = styled.div`
    background-image: url(${BgLogoCut});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 60%;
    opacity: .2;
    @media(width < 768px){
        background-image: url(${BgLogo});
        background-position: center;
        background-size: contain;
    }
`;