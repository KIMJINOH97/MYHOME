import React from 'react';
import styled from 'styled-components/native';
import { TextStyle } from '../util/TextStyle';
import { NK500 } from '../util/Color';

const InfoText = ({ name }) => {
  return (
    <Wrapper>
      <InfoName>{name}</InfoName>
    </Wrapper>
  );
};

export default InfoText;

const Wrapper = styled.View`
  height: 35px;
  justify-content: center;
  align-items: flex-start;
`;

const InfoName = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  letter-spacing: -0.48px;
`;
