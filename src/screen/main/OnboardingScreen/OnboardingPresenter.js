import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Image, View, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { PRIMARY_NORMAL, NK700 } from '../../../util/Color';
import UtilText from '../../../util/UtilText';
import INFO_PICTURE from '../../../../assets/INFO_PICTURE.png';
import MyhomeTitle from '../../../components/Myhome/MyhomeTitle';
import CompleteButton from '../../../util/CompleteButton';

const CARD_LIST = [
  { content: '간단한 서비스 요청으로', content2: 'VR 키트 당일 수령 하시고!' },
  { content: '원하는 관심 매물 모두 상담사가', content2: '원격으로 VR 투어해드립니다!' },
  { content: '투어 후 매물 선택하면', content2: '방문 예약 대신 잡아드리고!' },
  { content: '제휴 중개사가', content2: '매물 방문 도와드려요!' },
  { content: '원하는 매물 계약은', content2: '비대면 계약서로 안전하고 편리하게!' },
];

const Card = ({ title = true, content, content2 }) => {
  return (
    <View style={{ flex: 1 }}>
      {title && (
        <View style={{ marginLeft: 16 }}>
          <MyhomeTitle />
        </View>
      )}
      <View>
        <Image style={{ height: 300, width: '100%' }} source={INFO_PICTURE} />
      </View>
      <Message>
        <UtilText content={content} family={NK700} size="18px" letter="-0.8px" />
        <UtilText content={content2} family={NK700} size="18px" letter="-0.8px" />
      </Message>
    </View>
  );
};

const OnboardingPresenter = ({ goPage, toggle }) => {
  return (
    <Wrapper>
      <FavoriteContainer>
        <Swiper height={400} dotColor="#BBBBBB" activeDotColor={PRIMARY_NORMAL}>
          <FirstPicture>
            <UtilText content="부동산도 이제는" family={NK700} size="33px" letter="-1.0px" />
            <UtilText content="비대면으로!" family={NK700} size="33px" letter="-1.0px" />
          </FirstPicture>
          <Card content="간단한 서비스 요청으로" content2="VR 키트 당일 수령 하시고!" />
          <Card content="간단한 서비스 요청으로" content2="VR 키트 당일 수령 하시고!" />
          <FirstPicture>
            <UtilText content="나에게 딱 맞는 집을" family={NK700} size="33px" letter="-1.0px" />
            <UtilText content="찾아볼까요?" family={NK700} size="33px" letter="-1.0px" />
          </FirstPicture>
        </Swiper>
      </FavoriteContainer>
      <HomeButton>
        <CompleteButton name="홈으로 가기" height="50px" onPress={toggle} />
      </HomeButton>
    </Wrapper>
  );
};

export default OnboardingPresenter;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const FavoriteContainer = styled.View`
  height: 500px;
`;

const FirstPicture = styled.View`
  height: 100%;
  justify-content: center;
  padding-left: 16px;
`;

const Message = styled.View`
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.View`
  padding-horizontal: 16px;
`;
