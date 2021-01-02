import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar } from 'react-native';

import Title from '../util/Title';
import EnrollButton from '../util/EnrollButton';
import DivideLine from '../util/DivideLine';
import { LIGHT_GRAY2 } from '../util/Color';

const TITLE_NAME = '집 내놓기';

const PutHomeScreen = () => {
  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <EnrollButton name="1. 사진 등록" />
      <DivideLine height="6px" color={LIGHT_GRAY2} />
      <EnrollButton name="2. 상세 정보 등록" />
      <DivideLine height="6px" color={LIGHT_GRAY2} />
      <EnrollButton name="3. 주소 등록" />
      <DivideLine height="6px" color={LIGHT_GRAY2} />
    </Wrapper>
  );
};

export default PutHomeScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;
