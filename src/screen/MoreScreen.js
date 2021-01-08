import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';

import TabTitle from '../util/TabTitle';
import { LIGHT_GRAY, LIGHT_GRAY2, MEDIUM_GRAY, NK500 } from '../util/Color';
import { TextStyle } from '../util/TextStyle';
import CheckList from '../components/More/CheckList';

import my from '../../assets/my.png';
import MORE_CHECK from '../../assets/MORE_CHECK.png';
import MORE_ALERT from '../../assets/MORE_ALERT.png';
import MORE_HOME from '../../assets/MORE_HOME.png';

const MEMBER_INFO = '회원정보';
const LOGIN_AND_SIGNIN = '로그인 & 가입하기';
const ETC = `로그인하고 마이홈 서비스를 ${'\n'}자유롭게 이용해보세요`;

const CHECK_LIST = [
  {
    height: '8px',
    content: '직거래 시 주의사항',
    img: MORE_ALERT,
    page: 'PutHome',
  },
  { content: '직거래 시 체크리스트', img: MORE_CHECK, page: 'PutHome' },
  { height: '8px', content: '집 내놓기', img: MORE_HOME, page: 'PutHome' },
];

const MoreScreen = ({ navigation }) => {
  const nextPage = (page) => navigation.push(page);

  return (
    <Wrapper>
      <TabTitle name="더보기" />
      <MyPageContainer>
        <UserContainer>
          <MyProfile>
            <MyProfilePicture>
              <ProfilePicture source={my}></ProfilePicture>
            </MyProfilePicture>
          </MyProfile>
          <ProfileInformation>
            <MemberInformation>
              <Text>{MEMBER_INFO}</Text>
            </MemberInformation>
            <LoginInformation>
              <LoginButton
                onPress={() => {
                  nextPage('Login');
                }}
              >
                <LoginContent>{LOGIN_AND_SIGNIN}</LoginContent>
              </LoginButton>
            </LoginInformation>
            <MoreInformation>
              <MoreContent>{ETC}</MoreContent>
            </MoreInformation>
          </ProfileInformation>
        </UserContainer>
        <CheckContainer>
          {CHECK_LIST.map((list, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => nextPage(list.page)}>
                <CheckList
                  height={list.height ? list.height : '1px'}
                  content={list.content}
                  img={list.img}
                />
              </TouchableOpacity>
            );
          })}
        </CheckContainer>
      </MyPageContainer>
    </Wrapper>
  );
};

export default MoreScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const MyPageContainer = styled.View`
  flex: 11;
`;

const UserContainer = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: row;
`;

const MyProfile = styled.View`
  flex: 1;
  align-items: flex-start;
  margin-left: 16px;
  padding-top: 24px;
`;

const MyProfilePicture = styled.View`
  height: 56px;
  width: 56px;
`;

const ProfilePicture = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 45px;
  border-color: ${LIGHT_GRAY};
  border-width: 1px;
`;

const ProfileInformation = styled.View`
  flex: 3.5;
`;

const MemberInformation = styled.View`
  padding-right: 10px;
  justify-content: center;
  align-items: flex-end;
  height: 24px;
`;

const LoginButton = styled.TouchableOpacity``;

const LoginInformation = styled.View`
  letter-spacing: -1px;
`;

const LoginContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  letter-spacing: -0.54px;
`;

const MoreInformation = styled.View``;

const MoreContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  color: ${MEDIUM_GRAY};
`;

const CheckContainer = styled.View`
  flex: 3.5;
  background-color: ${LIGHT_GRAY2};
`;
