import React from 'react';
import styled from 'styled-components/native';

export type BoxSize = 'small' | 'medium' | 'large';

interface BoxProps {
  rounded: boolean;
  size: BoxSize;
  color: string;
  isBoxVisible: boolean;
}

const BOX_SIZE = {
  small: 100,
  medium: 200,
  large: 300,
};

/**
 *
 * @param size box의 크기 - 'small' | 'medium' | 'large'
 * @param rounded border-radius 적용 여부 - boolean
 * @param color 색상 - string
 * @param isBoxVisible opacity 0, 1 여부 - boolean
 */
export const Box = ({...props}: BoxProps) => {
  return <StyledView {...props} />;
};

const StyledView = styled.View<BoxProps>`
  align-items: center;
  justify-content: center;

  background-color: ${props => props.color};
  width: ${props => `${BOX_SIZE[props.size]}px`};
  height: ${props => `${BOX_SIZE[props.size]}px`};
  border-radius: ${props => (props.rounded ? '12px' : '0px')};
  opacity: ${props => (props.isBoxVisible ? 1 : 0)};
`;
