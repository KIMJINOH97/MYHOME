import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../../../util/Title';
import { InputStyle } from '../../../util/Input';
import InfoText from '../../../util/InfoText';
import { NK500, LIGHT_GRAY2, MEDIUM_GRAY, PRIMARY_NORMAL } from '../../../util/Color';
import { TextStyle } from '../../../util/TextStyle';
import UtilButton from '../../../util/UtilButton';

import { authApi } from '../../../api/index';

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

  const onChangeId = (email) => setUser({ ...user, email });

  const onChangePassword = (password) => setUser({ ...user, password });

  const onChangePasswordCheck = (passwordCheck) => setUser({ ...user, passwordCheck });

  const onChangeName = (name) => setUser({ ...user, name });

  const onChangePhoneNumber = (phoneNumber) => setUser({ ...user, phoneNumber });

  const onChangeBirth = (birth) => setUser({ ...user, birth });

  const handleOnSignUp = async () => {
    if (!user.email) {
      Alert.alert('', '이메일을 입력해주세요');
      return;
    }
    if (!user.password) {
      Alert.alert('', '비밀번호를 입력해주세요');
      return;
    }
    if (!user.name) {
      Alert.alert('', '이름을 입력해주세요');
      return;
    }
    if (!user.birth) {
      Alert.alert('', '생일을 입력해주세요');
      return;
    }
    if (!user.gender) {
      Alert.alert('', '성별을 입력해주세요');
      return;
    }
    if (!user.phoneNumber) {
      Alert.alert('', '휴대폰 번호를 입력해주세요');
      return;
    }

    if (user.password !== user.passwordCheck) {
      Alert.alert('', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    if (user.phoneNumber.length !== 11) {
      Alert.alert('', '휴대폰 번호를 확인해주세요.');
      return;
    }

    const result = await authApi.signup(user);
    if (result) {
      Alert.alert('회원가입에 성공하였습니다.');
      navigation.pop();
    }
  };

  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <KeyboardAwareScrollView>
        <SignUpContainer>
          <InfoText name="이메일" />
          <Input inputType="email" placeholder="hello@myhome.com" onChangeText={onChangeId} />
          <InfoText name="비밀번호" />
          <Input
            inputType="password"
            secureTextEntry
            placeholder="8자리 이상 영문자, 숫자, 특수문자를 포함"
            onChangeText={onChangePassword}
          />
          <Input
            inputType="password"
            secureTextEntry
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
            <Button
              who={user.gender === '여성'}
              onPress={() => setUser({ ...user, gender: '여성' })}
            >
              <ButtonContent>여성</ButtonContent>
            </Button>
            <Button
              who={user.gender === '남성'}
              onPress={() => setUser({ ...user, gender: '남성' })}
            >
              <ButtonContent>남성</ButtonContent>
            </Button>
          </ButtonBox>
          <InfoText name="휴대폰 번호" />
          <Input inputType="phone" placeholder="-없이 입력" onChangeText={onChangePhoneNumber} />
          <UtilButton name="회원가입" onPress={handleOnSignUp} />
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
  background-color: ${({ who }) => (who ? PRIMARY_NORMAL : LIGHT_GRAY2)};
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 15px;
  color: ${MEDIUM_GRAY};
`;
