import styled from "styled-components";

export const Title = styled.h3`
  font-size: 27px;
  margin: 80px 0 20px 0;
  color: var(--text-apresentation-color);
`;

export const Text = styled.p`
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '12px';
      case 'md':
        return '16px';
      case 'lg':
        return '20px';
      case 'xlg':
        return '24px';
      default:
        return '18px';
    }
  }};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: var(--text-apresentation-color);
`;

export const StyledSpace = styled.div`
  height: ${(props) => (props.height ? `${props.height}px` : '0')};
`;

export const StyledText = styled.div`
  /* Adicione aqui os estilos específicos para o componente StyledText */
`;