import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import { useRecoilState } from 'recoil';
import { presentMentoState } from '../../../../states/MentoState';
import { mentoApi } from '../../../../api/index';
import { DARK_GRAY, MEDIUM_GRAY, NK400 } from '../../../../util/Color';

import MENTO_IMAGE from '../../../../../assets/MENTO_IMAGE.png';
import MENTO_AWARD from '../../../../../assets/MENTO_AWARD.png';
import Title from '../../../../util/Title';
import DivideLine from '../../../../util/DivideLine';
import Review from '../../../../util/Review';
import Star from '../../../../util/Star';
import UtilText from '../../../../util/UtilText';
import UtilButton from '../../../../util/UtilButton';

const DetailMentoPresenter = ({ route, goPage }) => {
  const { reviews, name, introduction } = route.params;
  const [mento, setMento] = useRecoilState(presentMentoState);

  const getData = async () => {
    try {
      const result = await mentoApi.getPresentMento(route.params.id);
      if (result) {
        // console.log('결과', result);
        setMento(result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Title name="멘토 세부사항" />
      {mento && (
        <>
          <MentoDetailContainer>
            <MentoProfile>
              <ProfileImageView>
                <ProfileImage source={MENTO_IMAGE} />
              </ProfileImageView>
              <MentoContent>
                <UtilText content={`${name} 멘토`} size="20px" letter="-0.8px" />
                <UtilText
                  content={`${introduction}`}
                  size="14px"
                  letter="-0.14px"
                  color={MEDIUM_GRAY}
                />
              </MentoContent>
            </MentoProfile>
            <DivideLine height="1px" color="rgba(238, 238, 238, 0.5)" />
            <MentoringCountBox>
              <MentoringCount>
                <UtilText content="0 회" color="#494949" size="18px" letter="-0.8px" />
                <UtilText content="멘토링 횟수" color={DARK_GRAY} size="12px" />
              </MentoringCount>
            </MentoringCountBox>
            <DivideLine height="8px" color="rgba(238, 238, 238, 0.5)" />
            <CarrerInfoBox>
              <UtilText style={{ marginBottom: 12 }} content="경력사항" size="16px" />
              <InfoView>
                <AwardImageView>
                  <AwardImage source={MENTO_AWARD} />
                </AwardImageView>
                <UtilText
                  content="공인중개사 획득"
                  size="14px"
                  letter="-0.14px"
                  color={DARK_GRAY}
                  family={NK400}
                />
              </InfoView>
            </CarrerInfoBox>
            <DivideLine height="8px" color=" rgba(238, 238, 238, 0.5)" />
            <ReviewBox>
              <Review name="멘토 후기 " length={reviews.length} review="후기" />
              {reviews.length !== 0 &&
                reviews.map((list, index) => {
                  return (
                    <ReviewList key={index}>
                      <StarView>
                        <Star score={list.rate} width={24} height={24} />
                      </StarView>
                      <UtilText
                        content={`${list.content}`}
                        size="14px"
                        family={NK400}
                        color={DARK_GRAY}
                        letter="-0.14px"
                      />
                    </ReviewList>
                  );
                })}
            </ReviewBox>
          </MentoDetailContainer>
          <ReserveButtonView>
            <UtilButton onPress={() => goPage('Reserve')} name="예약하기" />
          </ReserveButtonView>
        </>
      )}
    </Wrapper>
  );
};

export default DetailMentoPresenter;

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

const MentoringCountBox = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;

const MentoringCount = styled.View`
  width: 72px;
  height: 64px;
  background-color: rgba(238, 238, 238, 0.5);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const CarrerInfoBox = styled.View`
  padding: 16px;
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

const ReserveButtonView = styled.View`
  position: absolute;
  width: 90%;
  left: 16px;
  right: 16px;
  bottom: 3%;
`;
