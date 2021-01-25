import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform, Alert } from 'react-native';

import { useRecoilState } from 'recoil';
import Title from '../../../util/Title';
import EnrollButton from '../../../util/EnrollButton';
import DivideLine from '../../../util/DivideLine';
import { LIGHT_GRAY2 } from '../../../util/Color';
import CompleteButton from '../../../util/CompleteButton';
import { homeApi } from '../../../api/index';
import { putHomeState } from '../../../states/PutHomeState';
import { photoState } from '../../../states/PhotoState';

const PutHomeScreen = ({ goPage, replacePage }) => {
  const [home] = useRecoilState(putHomeState);
  const [photo] = useRecoilState(photoState);

  const onComplete = async () => {
    // console.log(home);
    const result = await homeApi.putHome(home, photo);
    if (result) {
      replacePage('EnrollComplete');
    } else {
      Alert('빈 칸을 채워주세요');
    }
  };
  return (
    <Wrapper>
      <Title name="집 내놓기" />
      <EnrollBox>
        <EnrollButton height="55px" name="1. 사진 등록" onPress={() => goPage('EnrollPicture')} />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <EnrollButton height="55px" name="2. 주소 등록" onPress={() => goPage('EnrollAddress')} />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <EnrollButton
          height="55px"
          name="3. 상세 정보 등록"
          onPress={() => goPage('EnrollDetails')}
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
