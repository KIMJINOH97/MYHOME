import React from 'react';
import styled from 'styled-components/native';
import { TextStyle } from './TextStyle';

const UtilText = ({ content, color, size, family, letter }) => {
  return (
    <Wrapper>
      <Content color={color} size={size} family={family} letter={letter}>
        {content}
      </Content>
    </Wrapper>
  );
};

export default UtilText;

const Wrapper = styled.View``;

const Content = styled(TextStyle)`
  ${({ color }) => color && `color : ${color}`};
  ${({ size }) => size && `font-size: ${size}`};
  ${({ family }) => family && `font-family: ${family}`}
  ${({ letter }) => letter && `letter-spacing: ${letter}`}
`;
