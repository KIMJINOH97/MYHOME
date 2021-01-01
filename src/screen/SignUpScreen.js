import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../util/Title';
import { InputStyle } from '../util/Input';
import InfoText from '../components/SignUp/InfoText';

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
            placeholder="이메일을 입력해주세요"
            onChangeText={onChangeId}
          />
          <InfoText name="비밀번호" />
          <Input
            inputType="password"
            secureTextEntry={true}
            placeholder="비밀번호를 입력해주세요"
            onChangeText={onChangePassword}
          />
          <Input
            inputType="password"
            secureTextEntry={true}
            placeholder="비밀번호를 확인해주세요"
            onChangeText={onChangePasswordCheck}
          />
          <InfoText name="이름" />
          <Input
            inputType="name"
            placeholder="이름을 입력해주세요"
            onChangeText={onChangeName}
          />
          <InfoText name="생년월일" />

          <InfoText name="휴대폰 번호" />
          <Input
            inputType="phone"
            placeholder="휴대폰 번호를 입력해주세요"
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
  background-color: #fff;
`;

const SignUpContainer = styled.View`
  background-color: white;
  padding-vertical: 10px;
  padding-horizontal: 15px;
`;

const Input = styled(InputStyle)`
  margin-bottom: 5px;
`;
