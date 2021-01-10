import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import DetailContent from '../components/ListInfromation/DetailContent';
import SimpleList from '../components/ListInfromation/SimpleList';
import DivideLine from '../util/DivideLine';
import { TextStyle } from '../util/TextStyle';
import {
  LIGHT_GRAY2,
  MEDIUM_GRAY,
  DARK_GRAY,
  NK500,
  NK400,
  NK700,
  PRIMARY_NORMAL,
} from '../util/Color';

import CommentTitle from '../components/ListInfromation/CommentTitle';
import my from '../../assets/my.png';
import LIST_HOME from '../../assets/LIST_HOME.png';
import LIST_MANAGE from '../../assets/LIST_MANAGE.png';
import LIST_SIZE from '../../assets/LIST_SIZE.png';
import LIST_FLOOR from '../../assets/LIST_FLOOR.png';
import BACK from '../../assets/BACK.png';
import INFO_PICTURE from '../../assets/INFO_PICTURE.png';
import HOST from '../../assets/HOST.png';
import { useNavigation } from '@react-navigation/native';

const FirstRoute = ({ information }) => {
  const {
    room_type,
    deposit,
    monthly_rent,
    completion_year,
    floor,
    space,
    management_fee,
    detail,
    desk,
    refrigerator,
    short_term,
    washer,
    elevator,
    air_conditioner,
    heating,
    occupancy_date,
  } = information;
  return (
    <DetailInformation>
      <DetailTitle>
        <DetailTitleContent>상세정보</DetailTitleContent>
      </DetailTitle>
      <DivideLine height="1px" color={LIGHT_GRAY2} />
      <DivideLine height="15px" color={'white'} />
      <DetailContent name={'방종류'} info={room_type} />
      <DetailContent name={'가격'} info={`${deposit}/${monthly_rent}`} />
      <DetailContent name={'관리비'} info={`${management_fee}만원`} />
      <DetailContent name={'층수'} info={`${floor}층`} />
      <DetailContent name={'실평수'} info={`${space}평`} />
      <DetailContent name={'준공년도'} info={completion_year} />
      <DetailContent
        alignItem="flex-start"
        name={'추가옵션'}
        info={`${desk ? '책상 ' : ''}${refrigerator ? '냉장고 ' : ''}${
          washer ? '세탁기 ' : ''
        }${elevator ? '엘리베이터 ' : ''}${
          air_conditioner ? '에어컨 ' : ''
        }있음`}
      />
      <DetailContent name={'보일러'} info={heating} />
      <DetailContent name={'입주가능일'} info={occupancy_date} />
      <DetailContent alignItem="flex-start" name={'상세설명'} info={detail} />
    </DetailInformation>
  );
};

const SecondRoute = ({ information }) => {
  const { comments } = information;
  return (
    <DetailInformation>
      <ReviewTitle>
        <TitleBox>
          <DetailTitleContent>거주 후기 </DetailTitleContent>
          <DetailCount>
            <DetailCountContent>{comments.length}개</DetailCountContent>
          </DetailCount>
        </TitleBox>
        <ReviewButtonView>
          <ReviewButton>
            <ReviewButtonContent>리뷰 작성</ReviewButtonContent>
          </ReviewButton>
        </ReviewButtonView>
      </ReviewTitle>

      {comments.length ? (
        comments.map((comment, index) => {
          return (
            <>
              <CommentContainer key={index}>
                <CommentUser>
                  <CommentUserProfile>
                    <CommentUserProfileImage source={my} />
                  </CommentUserProfile>
                  <CommentUserEmail>
                    <EmailContent>{comment.user_email}</EmailContent>
                  </CommentUserEmail>
                </CommentUser>
                <CommentTitle name="장점" comment={comment.pros} />
                <CommentTitle name="단점" comment={comment.cons} />
                <CommentTitle name="한줄 평" comment={comment.content} />
                <DivideLine height="5px" color={'white'} />
              </CommentContainer>
              <DivideLine key={`d ${index}`} height="1px" color={LIGHT_GRAY2} />
            </>
          );
        })
      ) : (
        <></>
      )}
    </DetailInformation>
  );
};

const DetailCount = styled.View``;

const DetailCountContent = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -0.14px;
`;

const ReviewTitle = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
  height: 32px;
`;

const TitleBox = styled.View``;

const ReviewButtonView = styled.View`
  width: 80px;
  height: 32px;
`;

const ReviewButton = styled.TouchableOpacity`
  width: 80px;
  height: 32px;
  border-color: ${PRIMARY_NORMAL};
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ReviewButtonContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 15px;
  letter-spacing: -0.45px;
  color: ${PRIMARY_NORMAL};
`;

const CommentContainer = styled.View``;

const CommentUser = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const CommentUserProfile = styled.View`
  margin-right: 9px;
`;

const CommentUserProfileImage = styled.Image`
  width: 32px;
  height: 32px;
`;

const CommentUserEmail = styled.View``;

const EmailContent = styled(TextStyle)`
  font-family: ${NK400};
  color: ${DARK_GRAY};
  font-size: 12px;
  letter-spacing: -0.36px;
`;

const ThirdRoute = ({ information }) => {
  const { user_name, user_contact: phone } = information;
  return (
    <DetailInformation>
      <DetailTitle>
        <DetailTitleContent>집주인 정보</DetailTitleContent>
      </DetailTitle>
      <DivideLine height="1px" color={LIGHT_GRAY2} />
      <HostProfile>
        <ProfileImageView>
          <ProfileImage source={HOST} />
        </ProfileImageView>
        <ProfileInformation>
          <HostName>
            <HostNameContent>{user_name}</HostNameContent>
          </HostName>
          <HostPhone>
            <HostPhoneContent>
              {phone.slice(0, 3)}-{phone.slice(3, 7)}-{phone.slice(7, 11)}
            </HostPhoneContent>
          </HostPhone>
        </ProfileInformation>
      </HostProfile>
    </DetailInformation>
  );
};

const HostProfile = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const ProfileImageView = styled.View`
  height: 64px;
  margin-right: 26px;
`;

const ProfileImage = styled.Image`
  width: 64px;
  height: 64px;
`;

const ProfileInformation = styled.View``;

const HostName = styled.View`
  margin-bottom: 5px;
`;

const HostNameContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  letter-spacing: -0.54px;
`;

const HostPhone = styled.View``;

const HostPhoneContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -0.48px;
`;

const initialLayout = { width: Dimensions.get('window').width };

const ListInformationScreen = ({ route }) => {
  const {
    room_type,
    deposit,
    monthly_rent,
    floor,
    space,
    management_fee,
  } = route.params;
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: '정보',
    },
    {
      key: 'second',
      title: '리뷰',
    },
    {
      key: 'third',
      title: '집주인 정보',
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <Back>
          <BackButton onPress={() => navigation.pop()}>
            <ButtonImage source={BACK} />
          </BackButton>
        </Back>
        <Swiper height={240}>
          <Red>
            <Image
              source={INFO_PICTURE}
              style={{ width: '100%', height: '100%' }}
            />
          </Red>
          <Yellow />
          <Blue />
        </Swiper>

        <InfromationContainer>
          <ListTitle>
            <TitleContent>
              {room_type} {deposit}/{monthly_rent}
            </TitleContent>
            <SubContent>신촌 신축 원룸</SubContent>
          </ListTitle>
          <SimpleInformation>
            <SimpleList img={LIST_HOME} info={room_type} />
            <SimpleList img={LIST_SIZE} info={`${space}평`} />
            <SimpleList img={LIST_FLOOR} info={`${floor}층`} />
            <SimpleList img={LIST_MANAGE} info={`${management_fee}만`} />
          </SimpleInformation>
          <TabView
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{
                  backgroundColor: PRIMARY_NORMAL,
                }}
                style={{
                  backgroundColor: '#ffeae8',
                  elevation: 0,
                }}
                labelStyle={{
                  alignItems: 'center',
                  fontFamily: NK700,
                  fontSize: 14,
                  includeFontPadding: false,
                }}
                activeColor={PRIMARY_NORMAL}
                inactiveColor={MEDIUM_GRAY}
              />
            )}
            navigationState={{ index, routes }}
            renderScene={SceneMap({
              first: () => <FirstRoute information={route.params} />,
              second: () => <SecondRoute information={route.params} />,
              third: () => <ThirdRoute information={route.params} />,
            })}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </InfromationContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListInformationScreen;

const Red = styled.View`
  flex: 1;
  background-color: red;
`;

const Yellow = styled.View`
  flex: 1;
  background-color: yellow;
`;

const Blue = styled.View`
  flex: 1;
  background-color: blue;
`;

const Back = styled.View`
  position: relative;
  left: 16px;
  top: 40px;
  width: 24px;
  height: 24px;
  z-index: 9999;
`;

const BackButton = styled.TouchableOpacity``;

const ButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  z-index: 999;
`;

const InfromationContainer = styled.View`
  flex: 1;
`;

const ListTitle = styled.View`
  justify-content: center;
  align-items: center;
`;

const TitleContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 24px;
  letter-spacing: -1.2px;
`;

const SubContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  color: ${MEDIUM_GRAY};
`;

const SimpleInformation = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  border-top-color: ${LIGHT_GRAY2};
  border-top-width: 1px;
  padding: 10px;
`;

const DetailInformation = styled.View`
  margin-top: 20px;
  padding-horizontal: 16px;
`;

const DetailTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const DetailTitleContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  letter-spacing: -0.48px;
`;
