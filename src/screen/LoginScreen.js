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
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); // 빈 화면 클릭 시 키보드 내려감
      }}
    >
      <Wrapper>
        {/* <Title /> */}
        <LoginContainer>
          <MyHomeLogo>
            <LogoImageView>
              <LogoImage />
            </LogoImageView>
          </MyHomeLogo>
          <IdPasswordContainer>
            <IdBox>
              <LoginInput
                inputType="email"
                placeholder="이메일을 입력해주세요"
                onChangeText={onChangeId}
              />
            </IdBox>
            <PasswordBox>
              <LoginInput
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
                <ButtonContent>로그인</ButtonContent>
              </SubmitButton>
            </SubmitLoginBox>
            <SignUpFindButtonContainer>
              <SignUpButton
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
              >
                <SignUpContent>회원가입 </SignUpContent>
              </SignUpButton>
              <View>
                <Text>{'|'}</Text>
              </View>
              <SignUpButton
                onPress={() => {
                  navigation.navigate('FindPassword');
                }}
              >
                <SignUpContent> 비밀번호 찾기</SignUpContent>
              </SignUpButton>
            </SignUpFindButtonContainer>
          </IdPasswordContainer>
        </LoginContainer>
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

const LoginTitle = styled.View`
  flex: 1;
  background-color: red;
`;

const LoginContainer = styled.View`
  flex: 11;
  background-color: white;
`;

const MyHomeLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoImageView = styled.View`
  /* flex: 1; */
  width: 150px;
  height: 150px;
  background-color: blue;
`;
const LogoImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const IdPasswordContainer = styled.View`
  display: flex;
  flex: 2.5;
  background-color: red;
  padding: 10px;
  align-items: center;
`;

const IdBox = styled.View`
  margin-bottom: 8px;
`;

const LoginInput = styled.TextInput`
  width: 310px;
  height: 48px;
  padding: 6px;
  background-color: white;
  border-radius: 5px;
`;

const PasswordBox = styled.View`
  margin-bottom: 8px;
`;

const SubmitLoginBox = styled.View``;

const SubmitButton = styled.TouchableOpacity`
  width: 310px;
  height: 48px;
  padding: 6px;
  background-color: ${(props) => {
    return props.id !== '' && props.password !== '' ? '#FF766A' : '#BDBDBD';
  }};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonContent = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const SignUpFindButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SignUpButton = styled.TouchableOpacity``;

const SignUpContent = styled.Text`
  font-size: 16px;
`;
// const FindPasswordButton = styled.TouchableOpacity``;

// const FindPasswordContent = styled.Text`
//   font-size: 16px;
// `;
