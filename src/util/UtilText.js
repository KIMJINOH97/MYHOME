import React from 'react';
import styled from 'styled-components/native';
import { TextStyle } from './TextStyle';
import { NK500 } from './Color';

const UtilText = ({
  height,
  content,
  color = 'black',
  size,
  family = NK500,
  letter,
  style = {},
}) => {
  return (
    <Wrapper>
      <Content color={color} size={size} family={family} letter={letter} style={style}>
        {content}
      </Content>
    </Wrapper>
  );
};

export default UtilText;

const Wrapper = styled.View`
  ${({ height }) => height && `height : ${height}`}
`;

const Content = styled(TextStyle)`
  ${({ color }) => color && `color : ${color}`};
  ${({ size }) => size && `font-size: ${size}`};
  ${({ family }) => family && `font-family: ${family}`}
  ${({ letter }) => letter && `letter-spacing: ${letter}`}
`;
