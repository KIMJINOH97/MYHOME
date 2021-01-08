import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../util/Title';
import { InputStyle } from '../util/Input';
import InfoText from '../util/InfoText';
import { NK500, LIGHT_GRAY2, MEDIUM_GRAY, PRIMARY_NORMAL } from '../util/Color';
import { TextStyle } from '../util/TextStyle';

import { authApi } from '../api/index';

const TITLE_NAME = '회원가입';

const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    birth: '',
    gender: '',
    phoneNumber: '',
  });
  const [color, setColor] = useState('gray');

  const onChangeId = (email) => {
    setUser({ ...user, email });
  };

  const onChangePassword = (password) => {
    setUser({ ...user, password });
  };

  const onChangePasswordCheck = (passwordCheck) => {
    setUser({ ...user, passwordCheck });
  };

  const onChangeName = (name) => {
    setUser({ ...user, name });
  };

  const onChangePhoneNumber = (phoneNumber) => {
    setUser({ ...user, phoneNumber });
  };

  const onChangeBirth = (birth) => {
    setUser({ ...user, birth });
  };

  const handleOnSignUp = async () => {
    if (!user.email) {
      return;
    } else if (!user.password) {
      return;
    } else if (!user.passwordCheck) {
      return;
    } else if (!user.name) {
      return;
    } else if (!user.birth) {
      return;
    } else if (!user.gender) {
      return;
    } else if (!user.phoneNumber) {
      return;
    }

    if (user.password !== user.passwordCheck) {
      return;
    }
    const result = await authApi.signup(user);
    if (result) {
      alert('회원가입 성공');
      navigation.pop();
    }
    return;
  };

  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <KeyboardAwareScrollView>
        <SignUpContainer>
          <InfoText name="이메일" />
          <Input
            inputType="email"
            placeholder="hello@myhome.com"
            onChangeText={onChangeId}
          />
          <InfoText name="비밀번호" />
          <Input
            inputType="password"
            secureTextEntry={true}
            placeholder="8자리 이상 영문자, 숫자, 특수문자를 포함"
            onChangeText={onChangePassword}
          />
          <Input
            inputType="password"
            secureTextEntry={true}
            placeholder="비밀번호 확인"
            onChangeText={onChangePasswordCheck}
          />
          <InfoText name="이름" />
          <Input
            inputType="name"
            placeholder="한글 또는 영문만 입력가능"
            onChangeText={onChangeName}
          />
          <InfoText name="생년월일" />
          <Input
            inputType="name"
            placeholder="생년월일 입력 ex)1997-11-27"
            onChangeText={onChangeBirth}
          />
          <InfoText name="성별" />
          <ButtonBox>
            <Button onPress={() => setUser({ ...user, gender: '여성' })}>
              <ButtonContent>여성</ButtonContent>
            </Button>
            <Button onPress={() => setUser({ ...user, gender: '남성' })}>
              <ButtonContent>남성</ButtonContent>
            </Button>
          </ButtonBox>
          <InfoText name="휴대폰 번호" />
          <Input
            inputType="phone"
            placeholder="-없이 입력"
            onChangeText={onChangePhoneNumber}
          />
          <SignUpButtonBox>
            <SignUpButton onPress={handleOnSignUp}>
              <SignUpButtonContent>회원가입</SignUpButtonContent>
            </SignUpButton>
          </SignUpButtonBox>
        </SignUpContainer>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default SignUpScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
`;

const SignUpContainer = styled.ScrollView`
  padding-vertical: 10px;
  padding-horizontal: 15px;
`;

const Input = styled(InputStyle)`
  font-family: ${NK500};
  height: 40px;
  margin-bottom: 5px;
  include-font-padding: false;
`;

const ButtonBox = styled.View`
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 40px;
  border-radius: 8px;
  background-color: ${LIGHT_GRAY2};
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 15px;
  color: ${MEDIUM_GRAY};
`;

const SignUpButtonBox = styled.View`
  margin-top: 10px;
  height: 48px;
`;

const SignUpButton = styled.TouchableOpacity`
  height: 100%;
  background-color: ${PRIMARY_NORMAL};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const SignUpButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  color: white;
`;
