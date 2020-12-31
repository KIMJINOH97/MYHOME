import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Title from '../util/Title';
import { InputStyle } from '../util/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const TITLE_NAME = '로그인';
const LOGIN = '로그인';
const SIGNUP = '회원가입';
const FIND_PASSWORD = '비밀번호 찾기';

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState('gray');

  const onChangeId = (e) => {
    setId(e);
  };
  const onChangePassword = (e) => {
    setPassword(e);
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(id, password);
  };

  const nextPage = (page) => navigation.navigate(page);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); // 빈 화면 클릭 시 키보드 내려감
      }}
    >
      <Wrapper>
        <KeyboardAwareScrollView style={{ flexGrow: 1, flexShrink: 0 }}>
          <Title name={TITLE_NAME} />
          <LoginContainer>
            <MyHomeLogo>
              <LogoImageView>
                <LogoImage />
              </LogoImageView>
            </MyHomeLogo>
            <IdPasswordContainer>
              <IdBox>
                <Input
                  inputType="email"
                  placeholder="이메일을 입력해주세요"
                  onChangeText={onChangeId}
                />
              </IdBox>
              <PasswordBox>
                <Input
                  inputType="password"
                  secureTextEntry={true}
                  placeholder="비밀번호를 입력해주세요"
                  onChangeText={onChangePassword}
                />
              </PasswordBox>
              <SubmitLoginBox>
                <SubmitButton
                  id={id}
                  password={password}
                  color={color}
                  onPress={submitData}
                >
                  <ButtonContent>{LOGIN}</ButtonContent>
                </SubmitButton>
              </SubmitLoginBox>
              <DivideLine />
              <SignUpFindButtonContainer>
                <SignUpFindPwButton onPress={() => nextPage('SignUp')}>
                  <SignUpFindPwContent>{SIGNUP} </SignUpFindPwContent>
                </SignUpFindPwButton>
                <View>
                  <Text>{'|'}</Text>
                </View>
                <SignUpFindPwButton onPress={() => nextPage('FindPassword')}>
                  <SignUpFindPwContent> {FIND_PASSWORD}</SignUpFindPwContent>
                </SignUpFindPwButton>
              </SignUpFindButtonContainer>
            </IdPasswordContainer>
          </LoginContainer>
        </KeyboardAwareScrollView>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: #fff;
`;

const LoginContainer = styled.View`
  /* background-color: red; */
`;

const MyHomeLogo = styled.View`
  aspect-ratio: 3;
  justify-content: center;
  align-items: center;
`;

const LogoImageView = styled.View`
  width: 100px;
  height: 100px;
  background-color: blue;
`;
const LogoImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const IdPasswordContainer = styled.View`
  aspect-ratio: 1.6;
  margin-horizontal: 10px;
  padding-vertical: 5px;
  align-items: center;
`;
//    padding-vertical: 5
const IdBox = styled.View`
  width: 100%;
  margin-bottom: 8px;
`;

const Input = styled(InputStyle)``;

const PasswordBox = styled.View`
  width: 100%;
  margin-bottom: 8px;
`;

const SubmitLoginBox = styled.View`
  width: 100%;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  padding: 6px;
  background-color: ${(props) => {
    return props.id !== '' && props.password !== '' ? '#FF766A' : '#dbdbdb';
  }};
  border: 1px #dbdbdb;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonContent = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const DivideLine = styled.View`
  height: 10px;
`;

const SignUpFindButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SignUpFindPwButton = styled.TouchableOpacity``;

const SignUpFindPwContent = styled.Text`
  color: black;
  font-size: 16px;
`;
