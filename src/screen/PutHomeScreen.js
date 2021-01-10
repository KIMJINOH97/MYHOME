import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar } from 'react-native';

import Title from '../util/Title';
import EnrollButton from '../util/EnrollButton';
import DivideLine from '../util/DivideLine';
import { PRIMARY_NORMAL, LIGHT_GRAY2 } from '../util/Color';
import CompleteButton from '../util/CompleteButton';
import { homeApi } from '../api/index';
import { putHomeState } from '../states/PutHomeState';
import { useRecoilState } from 'recoil';

const TITLE_NAME = '집 내놓기';

const PutHomeScreen = ({ navigation }) => {
  const [home, setHome] = useRecoilState(putHomeState);

  const nextPage = (page) => navigation.push(page);
  const onComplete = async () => {
    // console.log(home);
    const result = await homeApi.putHome(home);
    if (result) {
      navigation.replace('EnrollComplete');
    } else {
      alert('빈 칸을 채워주세요');
    }
  };
  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <EnrollBox>
        <EnrollButton
          height="55px"
          name="1. 사진 등록"
          onPress={() => nextPage('EnrollPicture')}
        />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <EnrollButton
          height="55px"
          name="2. 주소 등록"
          onPress={() => nextPage('EnrollAddress')}
        />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <EnrollButton
          height="55px"
          name="3. 상세 정보 등록"
          onPress={() => nextPage('EnrollDetails')}
        />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
      </EnrollBox>
      <CompleteButton onPress={onComplete} name="집내놓기 완료" />
    </Wrapper>
  );
};

export default PutHomeScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const EnrollBox = styled.View`
  flex: 8;
`;
