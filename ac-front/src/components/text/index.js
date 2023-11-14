import React from "react";
import * as Styled from './style';

export function Text({ text, size, title = false, space }) {
  if (title) {
    return <Styled.Title size={size}>{text}</Styled.Title>;
  }

  if (Array.isArray(text)) {
    return (
      <Styled.StyledText>
        {text.map((paragraph, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Styled.StyledSpace height={space} />}
            <Styled.Text>{paragraph}</Styled.Text>
          </React.Fragment>
        ))}
      </Styled.StyledText>
    );
  }

  return <Styled.Text size={size}>{text}</Styled.Text>;
}