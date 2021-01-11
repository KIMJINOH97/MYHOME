import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar, Image } from 'react-native';
import Title from '../util/Title';

import COMPLETE from '../../assets/COMPLETE.png';
import CHECK_CIRCLE from '../../assets/CHECK_CIRCLE.png';
import { TextStyle } from '../util/TextStyle';
import { NK700, PRIMARY_NORMAL } from '../util/Color';
import { useRecoilState } from 'recoil';
import { homeListState } from '../states/HomeListState';
import { homeApi } from '../api/index';

const EnrollCompleteScreen = () => {
  const getData = async () => {
    try {
      const result = await homeApi.getHome();
      setHome(result);
    } catch (e) {
      console.log(e);
    }
  };

  const [home, setHome] = useRecoilState(homeListState);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <Title name="집 내놓기"></Title>
      <CompleteContainer>
        <CheckImageView>
          <CheckImage source={CHECK_CIRCLE} />
        </CheckImageView>
        <CompleteMessageView>
          <CompleteMessage>매물 등록이 완료되었습니다!</CompleteMessage>
        </CompleteMessageView>
        <CompleteImageView>
          <CompleteImage source={COMPLETE} />
        </CompleteImageView>
      </CompleteContainer>
    </Wrapper>
  );
};

export default EnrollCompleteScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const CompleteContainer = styled.View`
  flex: 1;
`;

const CheckImageView = styled.View`
  flex: 1.5;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
`;

const CheckImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const CompleteMessageView = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;

const CompleteMessage = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 24px;
  letter-spacing: -1.2px;
  color: ${PRIMARY_NORMAL};
`;

const CompleteImageView = styled.View`
  flex: 8;
  align-items: center;
  padding-top: 10px;
  height: 338px;
`;

const CompleteImage = styled.Image`
  height: 338px;
  width: 221px;
`;
