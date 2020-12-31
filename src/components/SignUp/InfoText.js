import React from 'react';
import styled from 'styled-components/native';

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

const InfoName = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
