import React from 'react';
import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../../../util/Title';

const FindPasswordPresenter = () => {
  return (
    <Wrapper>
      <KeyboardAwareScrollView style={{ flexGrow: 1, flexShrink: 0 }}>
        <Title name="비밀번호 찾기" />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default FindPasswordPresenter;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: #fff;
`;

const Red = styled.View`
  aspect-ratio: 6;
  background-color: red;
`;
