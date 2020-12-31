import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../util/Title';

const TITLE_NAME = '비밀번호 찾기';
const FindPasswordScreen = () => {
  return (
    <Wrapper>
      <KeyboardAwareScrollView style={{ flexGrow: 1, flexShrink: 0 }}>
        <Title name={TITLE_NAME} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default FindPasswordScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: #fff;
`;

const Red = styled.View`
  aspect-ratio: 6;
  background-color: red;
`;
