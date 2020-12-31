import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Text, Platform } from 'react-native';

import TabTitle from '../util/TabTitle';

const FavoriteScreen = () => {
  return (
    <Wrapper>
      <TabTitle name="관심매물" />
      <FavoriteContainer></FavoriteContainer>
    </Wrapper>
  );
};

export default FavoriteScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const FavoriteContainer = styled.View`
  flex: 11;
`;
