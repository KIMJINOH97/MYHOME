import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { StatusBar, Text, View, Platform } from 'react-native';
import TabTitle from '../util/TabTitle';
import { TextStyle } from '../util/TextStyle';

import { LIGHT_GRAY, NK500 } from '../util/Color';

const CheckListScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TabTitle name="체크리스트" />
      <FavoriteContainer>
        <PleaseLoginView>
          <LoginContent>베타테스트 기간 중입니다.</LoginContent>
        </PleaseLoginView>
      </FavoriteContainer>
    </Wrapper>
  );
};

export default CheckListScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const FavoriteContainer = styled.View`
  flex: 11;
`;

const PleaseLoginView = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 20px;
  color: ${LIGHT_GRAY};
`;
