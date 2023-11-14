import styled from 'styled-components';
import {Linkedin, Whatsapp, ArrowUp} from '../../assets/icons/index.js'

export const Footer = styled.footer`
background: var(--bg-theme-color);
display:flex;
align-items:center;
justify-content:center;
`;

export const ContentFooter = styled.footer`
display: flex;
width:900px;
justify-content: space-between;
flex-wrap:wrap;
padding:20px;
`;

export const FooterText = styled.p`
  opacity:.3;
  font-weight:400;
  font-size: 20px;
  padding: 5px;
`;
export const ImgLogo = styled.img`
width:80px;
height:100%;
opacity: 0.2;
`

export const MiddleContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:10px;
`

export const MiddleRight = styled.div`
  display:flex;
  flex-direction:column;
  padding: 0 0 0 50px;
  gap:5px;
`

export const Flex = styled.div`
display: flex;
gap: 5px;
align-items: baseline;
`;

export const FooterTitle = styled.div`
  font-weight: 600;
  color: var(--solid-color);
  font-size: 22px;
`;

export const Bold = styled.p`
    font-weight: 600;
    color: var(--solid-color);
    font-size: 17px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--solid-color);
  max-width:200px;
  opacity:.9;
  gap:20px;
  cursor:pointer;
`;

export const RightContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:20px;
  align-items: flex-end;
  
  svg{
    width:30px;
    height:auto;
    cursor:pointer;
  }
`

export const WhatsappNumberIcon = styled(Whatsapp)`
width: 18px;
cursor:pointer;
fill: var(--solid-color);
`

export const WhatsappIcon = styled(Whatsapp)`
fill: var(--solid-color);
`

export const LinkedinIcon = styled(Linkedin)`
fill: var(--solid-color);
`

export const ArrowUpIcon = styled(ArrowUp)`
background: var(--solid-color);
fill: var(--text-color);
border-radius:10px;
`

export const Gap = styled.div`
  display:flex;
  gap:5px;
`