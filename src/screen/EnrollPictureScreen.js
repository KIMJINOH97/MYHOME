import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import Title from '../util/Title';

const EnrollPictureScreen = () => {
  return (
    <Wrapper>
      <Title name="사진등록"></Title>
    </Wrapper>
  );
};

export default EnrollPictureScreen;
const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;
