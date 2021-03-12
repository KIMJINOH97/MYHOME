import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Image, View, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { PRIMARY_NORMAL, NK700 } from '../../../util/Color';
import UtilText from '../../../util/UtilText';
import INFO_PICTURE from '../../../../assets/INFO_PICTURE.png';
import MyhomeTitle from '../../../components/Myhome/MyhomeTitle';
import CompleteButton from '../../../util/CompleteButton';

import ON_BOARDING_1 from '../../../../assets/ON_BOARDING_1.png';
import ON_BOARDING_2 from '../../../../assets/ON_BOARDING_2.png';
import ON_BOARDING_3 from '../../../../assets/ON_BOARDING_3.png';
import ON_BOARDING_4 from '../../../../assets/ON_BOARDING_4.png';
import ON_BOARDING_5 from '../../../../assets/ON_BOARDING_5.png';

const CARD_LIST = [
  {
    content: '부동산도 이제는',
    content2: '비대면으로!',
  },
  {
    picture: ON_BOARDING_1,
    content: '간단한 서비스 요청으로',
    content2: 'VR 키트 당일 수령 하시고!',
    height: 160,
    width: 250,
  },
  {
    picture: ON_BOARDING_2,
    content: '원하는 관심 매물 모두 상담사가',
    content2: '원격으로 VR 투어해드립니다!',
    height: 230,
    width: 200,
  },
  {
    picture: ON_BOARDING_3,
    content: '투어 후 매물 선택하면',
    content2: '방문 예약 대신 잡아드리고!',
    height: 200,
    width: 200,
  },
  {
    picture: ON_BOARDING_4,
    content: '제휴 중개사가',
    content2: '매물 방문 도와드려요!',
    height: 210,
    width: 185,
  },
  {
    picture: ON_BOARDING_5,
    content: '원하는 매물 계약은',
    content2: '비대면 계약서로 안전하고 편리하게!',
    height: 177,
    width: 250,
  },
  {
    content: '나에게 딱 맞는 집을',
    content2: '찾아볼까요?',
  },
];

const Card = ({ content, content2, picture = null, height, width }) => {
  return picture === null ? (
    <FirstPicture>
      <UtilText content="부동산도 이제는" family={NK700} size="33px" letter="-1.0px" />
      <UtilText content="비대면으로!" family={NK700} size="33px" letter="-1.0px" />
    </FirstPicture>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 220, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height, width, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ height: '100%', width: '100%' }} source={picture} />
        </View>
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
      <View style={{ marginLeft: 16 }}>
        <MyhomeTitle />
      </View>
      <FavoriteContainer>
        <Swiper height={400} dotColor="#BBBBBB" activeDotColor={PRIMARY_NORMAL}>
          {CARD_LIST.map((card, index) => {
            return (
              <Card
                index={`${index}pic`}
                height={card.height}
                width={card.width}
                content={card.content}
                content2={card.content2}
                picture={card.picture}
              />
            );
          })}
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
  height: 400px;
`;

const FirstPicture = styled.View`
  height: 100%;
  justify-content: center;
  padding-left: 16px;
`;

const Message = styled.View`
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.View`
  padding-horizontal: 16px;
`;
