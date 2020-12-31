import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar, Platform } from 'react-native';

import TabTitle from '../util/TabTitle';

const MEMBER_INFO = '회원정보';
const LOGIN_AND_SIGNIN = '로그인 & 가입하기';
const ETC = '로그인하고 마이홈 서비스를 자유롭게 이용해보세요';

const MoreScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TabTitle name="더보기" />
      <MyPageContainer>
        <UserContainer>
          <MyProfile>
            <MyProfilePicture>
              <ProfilePicture
                source={require('../pengsu.png')}
              ></ProfilePicture>
            </MyProfilePicture>
          </MyProfile>
          <ProfileInformation>
            <MemberInformation>
              <Text>{MEMBER_INFO}</Text>
            </MemberInformation>
            <LoginInformation>
              <LoginButton
                onPress={() => {
                  navigation.push('Login');
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
        <DivideLine />
        <CheckContainer>
          <CheckList>
            <CheckContent>주의사항</CheckContent>
          </CheckList>
          <DivideLine />
          <CheckList>
            <CheckContent>체크리스트</CheckContent>
          </CheckList>
          <DivideLine />
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
  /* background-color: red; */
  flex-direction: row;
`;

const MyProfile = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
`;

const MyProfilePicture = styled.View`
  height: 90px;
  width: 90px;
`;
const ProfilePicture = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 45px;
  border-color: gray;
  border-width: 1px;
`;

const ProfileInformation = styled.View`
  flex: 2;
`;

const MemberInformation = styled.View`
  flex: 1;
  padding-right: 10px;
  justify-content: center;
  align-items: flex-end;
  /* background-color: purple; */
`;

const LoginButton = styled.TouchableOpacity`
  flex: 1;
`;

const LoginInformation = styled.View`
  flex: 1.3;
  /* background-color: yellow; */
  letter-spacing: -1px;
`;

const LoginContent = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const MoreInformation = styled.View`
  flex: 3;
  /* background-color: pink; */
`;

const MoreContent = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #9e9e9e;
`;

const DivideLine = styled.View`
  height: 8px;
  background-color: #eeeeee;
`;

const CheckContainer = styled.View`
  flex: 3.5;
  /* background-color: blue; */
`;

const CheckList = styled.View`
  height: 48px;
  padding-left: 15px;
  align-items: flex-start;
  justify-content: center;
`;

const CheckContent = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
