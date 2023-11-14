import styled from 'styled-components';

export const PageContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 0 20vw 0 20vw;
@media(width < 768px){
    padding: 0 25px 0 25px;
}
`;

export const Img = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '0')};
`;
