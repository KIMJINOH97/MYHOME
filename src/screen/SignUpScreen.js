import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../util/Title';
import { InputStyle } from '../util/Input';
import InfoText from '../util/InfoText';
import { LIGHT_GRAY2, MEDIUM_GRAY } from '../util/Color';

const TITLE_NAME = '회원가입';

const SignUpScreen = () => {
  const [User, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    phoneNumber: '',
  });
  const [color, setColor] = useState('gray');

  const onChangeId = (email) => {
    setUser({ ...User, email });
  };

  const onChangePassword = (password) => {
    setUser({ ...User, password });
  };

  const onChangePasswordCheck = (passwordCheck) => {
    setUser({ ...User, passwordCheck });
  };

  const onChangeName = (name) => {
    setUser({ ...User, name });
  };

  const onChangePhoneNumber = (phoneNumber) => {
    setUser({ ...User, phoneNumber });
  };

  return (
    <Wrapper>
      <KeyboardAwareScrollView>
        <Title name={TITLE_NAME} />
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
          <InfoText name="성별" />
          <ButtonBox>
            <Button>
              <ButtonContent>여성</ButtonContent>
            </Button>
            <Button>
              <ButtonContent>남성</ButtonContent>
            </Button>
          </ButtonBox>
          <InfoText name="휴대폰 번호" />
          <Input
            inputType="phone"
            placeholder="-없이 입력"
            onChangeText={onChangePhoneNumber}
          />
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

const SignUpContainer = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 15px;
`;

const Input = styled(InputStyle)`
  margin-bottom: 5px;
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
const ButtonContent = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: ${MEDIUM_GRAY};
`;
