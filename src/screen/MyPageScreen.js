import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar, Platform } from 'react-native';

const MEMBER_INFO = '회원정보';
const LOGIN_AND_SIGNIN = '로그인 & 가입하기';
const ETC = '로그인하고 마이홈 서비스를 자유롭게 이용해보세요';

const MyPageScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <MyPageTitle></MyPageTitle>
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
        <ListContainer></ListContainer>
      </MyPageContainer>
    </Wrapper>
  );
};

export default MyPageScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
`;

const MyPageTitle = styled.View`
  flex: 1;
`;

const MyPageContainer = styled.View`
  flex: 11;
`;

const UserContainer = styled.View`
  flex: 1;
  background-color: red;
  flex-direction: row;
`;

const MyProfile = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  flex: 1.6;
  background-color: gray;
  padding-left: 10px;
`;

const MemberInformation = styled.View`
  flex: 1;
  padding-right: 10px;
  justify-content: center;
  align-items: flex-end;
  background-color: purple;
`;

const LoginButton = styled.TouchableOpacity`
  flex: 1;
`;

const LoginInformation = styled.View`
  flex: 1.3;
  background-color: yellow;
  letter-spacing: -1px;
`;

const LoginContent = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const MoreInformation = styled.View`
  flex: 2.3;
  background-color: pink;
`;

const MoreContent = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #9e9e9e;
`;

const DivideLine = styled.View`
  height: 10px;
  background-color: #9e9e9e;
`;

const ListContainer = styled.View`
  flex: 3.5;
  background-color: blue;
`;
