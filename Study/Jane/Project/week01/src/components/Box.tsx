import React from 'react';
import styled, {css} from 'styled-components/native';

interface Props {
  rounded: boolean;
  size: 'small' | 'medium' | 'large';
  color: string;
}

function Box({rounded, size, color}: Props) {
  return <StyledBox rounded={rounded} size={size} color={color} />;
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const StyledBox = styled.View<Props>`
  ${({rounded}) =>
    rounded &&
    css`
      border-radius: 16px;
    `}
  ${({size}) => {
    switch (size) {
      case 'small':
        return css`
          width: 32px;
          height: 32px;
        `;
      case 'medium':
        return css`
          width: 64px;
          height: 64px;
        `;
      case 'large':
        return css`
          width: 128px;
          height: 128px;
        `;
    }
  }}
  background-color: ${({color}) => color};
`;

export default Box;
