import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useRecoilState } from 'recoil';
import { TextStyle } from '../util/TextStyle';
import {
  DARK_GRAY,
  LIGHT_GRAY2,
  MEDIUM_GRAY,
  NK400,
  NK500,
  NK700,
  PRIMARY_NORMAL,
} from '../util/Color';

import MENTO_IMAGE from '../../assets/MENTO_IMAGE.png';
import MENTO_AWARD from '../../assets/MENTO_AWARD.png';
import Title from '../util/Title';
import DivideLine from '../util/DivideLine';
import Review from '../util/Review';
import Star from '../util/Star';
import { FlatList } from 'react-native-gesture-handler';

const MentoDetailScreen = ({ route }) => {
  const { reviews, name, introduction } = route.params;
  return (
    <Wrapper>
      <Title name="멘토 세부사항" />
      <MentoDetailContainer>
        <MentoProfile>
          <ProfileImageView>
            <ProfileImage source={MENTO_IMAGE} />
          </ProfileImageView>
          <MentoContent>
            <MentoName>
              <Name>{name} 멘토</Name>
            </MentoName>
            <MentoComment>
              <Comment>{introduction}</Comment>
            </MentoComment>
          </MentoContent>
        </MentoProfile>
        <DivideLine height="1px" color={LIGHT_GRAY2} />
        <MentoringCountBox>
          <MentoringCount>
            <Count>0회</Count>
            <Content>멘토링 횟수</Content>
          </MentoringCount>
        </MentoringCountBox>
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <CarrerInfoBox>
          <InfoTitle>
            <TitleContent>경력사항</TitleContent>
          </InfoTitle>
          <InfoView>
            <AwardImageView>
              <AwardImage source={MENTO_AWARD} />
            </AwardImageView>
            <AwardInfo>
              <AwardInfoContent>공인중개사 획득</AwardInfoContent>
            </AwardInfo>
          </InfoView>
        </CarrerInfoBox>
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <ReviewBox>
          <Review name="멘토 후기 " length={reviews.length} review="후기" />
          {reviews.length &&
            reviews.map((list, index) => {
              return (
                <ReviewList key={index}>
                  <StarView>
                    <Star score={list.rate} width={24} height={24} />
                  </StarView>
                  <ReviewContentView>
                    <ReviewContentText>{list.content}</ReviewContentText>
                  </ReviewContentView>
                </ReviewList>
              );
            })}
        </ReviewBox>
      </MentoDetailContainer>
      <ReserveButtonView>
        <ReserveButton>
          <ButtonContent>예약하기</ButtonContent>
        </ReserveButton>
      </ReserveButtonView>
    </Wrapper>
  );
};

export default MentoDetailScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
  background-color: white;
`;

const MentoDetailContainer = styled.ScrollView``;

const MentoProfile = styled.View`
  margin-top: 10px;
  padding: 16px;
  flex-direction: row;
`;

const ProfileImageView = styled.View`
  width: 80px;
  height: 80px;
  margin-right: 16px;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const MentoContent = styled.View`
  justify-content: center;
`;

const MentoName = styled.View``;

const Name = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 20px;
  letter-spacing: -0.8px;
`;

const MentoComment = styled.View``;

const Comment = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  letter-spacing: -0.14px;
  color: ${MEDIUM_GRAY};
`;

const MentoringCountBox = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;

const MentoringCount = styled.View`
  width: 72px;
  height: 64px;
  background-color: ${LIGHT_GRAY2};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Count = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  letter-spacing: -0.8px;
  color: #494949;
`;

const Content = styled(TextStyle)`
  font-family: ${NK500};
  color: ${DARK_GRAY};
  font-size: 12px;
`;

const CarrerInfoBox = styled.View`
  padding: 16px;
`;

const InfoTitle = styled.View`
  margin-bottom: 12px;
`;

const TitleContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
`;

const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AwardImageView = styled.View`
  height: 24px;
  width: 24px;
`;

const AwardImage = styled.Image`
  height: 100%;
  width: 100%;
`;

const AwardInfo = styled.View``;

const AwardInfoContent = styled(TextStyle)`
  font-family: ${NK400};
  color: ${DARK_GRAY};
  letter-spacing: -0.14px;
  font-size: 14px;
`;

const ReviewBox = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 15px;
`;

const ReviewList = styled.View`
  align-items: flex-start;
`;

const StarView = styled.View`
  height: 24px;
  margin-bottom: 15px;
`;

const ReviewContentView = styled.View``;

const ReviewContentText = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  color: ${DARK_GRAY};
  letter-spacing: -0.14px;
`;

const ReserveButtonView = styled.View`
  position: absolute;
  width: 90%;
  left: 16px;
  right: 16px;
  bottom: 3%;
`;

const ReserveButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY_NORMAL};
  border-radius: 8px;
  height: 48px;
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  letter-spacing: -0.54px;
  color: white;
`;
