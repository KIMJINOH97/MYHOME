import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const EnrollButton = ({ height, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper height={height}>
        <ContentView>
          <Content>{name}</Content>
        </ContentView>
        <NextButtonView>
          <NextButton>{'>'}</NextButton>
        </NextButtonView>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default EnrollButton;

const Wrapper = styled.View`
  flex-direction: row;
  height: ${({ height }) => (height ? height : '48px')};
  padding-horizontal: 15px;
  align-items: center;
  justify-content: space-between;
`;
const ContentView = styled.View``;
const Content = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
const NextButtonView = styled.View``;
const NextButton = styled.Text`
  font-size: 18px;
`;
