import React from 'react';
import styled from 'styled-components/native';

interface BoxProps {
  rounded: boolean;
  size: 'small' | 'medium' | 'large';
  color: string;
}

const Box = ({rounded, size, color}: BoxProps) => {
  return <BoxContainer rounded={rounded} size={size} color={color} />;
};

const BoxContainer = styled.View<BoxProps>`
  background: ${props => props.color || 'white'};
  border-radius: ${props => (props.rounded ? '12px' : '0px')};

  ${props =>
    props.size === 'small' &&
    `
      width: 50px;
      height: 50px;
    `}
  ${props =>
    props.size === 'medium' &&
    `
          width: 100px;
          height: 100px;
        `}
  ${props =>
    props.size === 'large' &&
    `
        width: 150px;
        height: 150px;
        `}
`;

export default Box;
