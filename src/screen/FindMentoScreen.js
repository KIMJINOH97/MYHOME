import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import TabTitle from '../util/TabTitle';

const FindMentoScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TabTitle name="멘토찾기" />
      <FindMentoContainer></FindMentoContainer>
    </Wrapper>
  );
};

export default FindMentoScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
  background-color: white;
`;

const FindMentoContainer = styled.View`
  flex: 11;
`;
