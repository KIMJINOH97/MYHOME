import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRecoilState } from 'recoil';
import { authApi, homeApi } from '../../../api/index';
import Title from '../../../util/Title';
import { InputStyle } from '../../../util/Input';
import { TextStyle } from '../../../util/TextStyle';
import { NK500, PRIMARY_NORMAL, LIGHT_GRAY, MEDIUM_GRAY } from '../../../util/Color';
import LOGIN_LOGO from '../../../../assets/LOGIN_LOGO.png';
import LOGIN_HOME from '../../../../assets/LOGIN_HOME.png';
import { userState } from '../../../states/LoginState';
import { favoriteHomeState } from '../../../states/HomeListState';

const LoginPresenter = ({ goPage, goBack }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [, setUserInfo] = useRecoilState(userState);
  const [, setFavList] = useRecoilState(favoriteHomeState);
  const [color] = useState('gray');

  const onChangeId = (e) => {
    setId(e);
  };

  const onChangePassword = (e) => {
    setPassword(e);
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();
    if (!id) {
      Alert.alert('로그인 실패', '이메일을 입력해주세요.');
      return;
    }
    if (!password) {
      Alert.alert('로그인 실패', '비밀번호를 입력해주세요');
      return;
    }
    const result = await authApi.login(id, password);

    if (result) {
      const { user } = result;
      setUserInfo(user);
      const res = await homeApi.getFavorite(user.id);
      setFavList(res);
      goBack();
    } else {
      Alert.alert('로그인 실패', '아이디 및 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); // 빈 화면 클릭 시 키보드 내려감
      }}
    >
      <Wrapper>
        <KeyboardAwareScrollView style={{ flexGrow: 1, flexShrink: 0 }}>
          <Title name="로그인" />
          <LoginContainer>
            <MyHomeLogo>
              <HomeImageView>
                <HomeImage source={LOGIN_HOME} />
              </HomeImageView>
              <LogoImageView>
                <LogoImage source={LOGIN_LOGO} />
              </LogoImageView>
            </MyHomeLogo>
            <IdPasswordContainer>
              <IdBox>
                <Input
                  inputType="email"
                  placeholder="아이디(이메일 주소)"
                  onChangeText={onChangeId}
                />
              </IdBox>
              <PasswordBox>
                <Input
                  inputType="password"
                  secureTextEntry
                  placeholder="비밀번호"
                  onChangeText={onChangePassword}
                />
              </PasswordBox>
              <SubmitLoginBox>
                <SubmitButton id={id} password={password} color={color} onPress={handleOnLogin}>
                  <ButtonContent>로그인</ButtonContent>
                </SubmitButton>
              </SubmitLoginBox>
              <DivideLine />
              <SignUpFindButtonContainer>
                <SignUpFindPwButton onPress={() => goPage('SignUp')}>
                  <SignUpFindPwContent>회원가입 </SignUpFindPwContent>
                </SignUpFindPwButton>
                <View>
                  <Text style={{ color: MEDIUM_GRAY }}>|</Text>
                </View>
                <SignUpFindPwButton onPress={() => goPage('FindPassword')}>
                  <SignUpFindPwContent> 비밀번호 찾기</SignUpFindPwContent>
                </SignUpFindPwButton>
              </SignUpFindButtonContainer>
            </IdPasswordContainer>
          </LoginContainer>
        </KeyboardAwareScrollView>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginPresenter;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: #fff;
`;

const LoginContainer = styled.View`
  margin-top: 20px;
`;

const MyHomeLogo = styled.View`
  aspect-ratio: 3;
  justify-content: center;
  align-items: center;
`;

const HomeImageView = styled.View`
  width: 62px;
  height: 54px;
`;

const HomeImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const LogoImageView = styled.View`
  width: 104px;
  height: 38px;
  margin-top: 12px;
`;

const LogoImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const IdPasswordContainer = styled.View`
  margin-horizontal: 16px;
  padding-vertical: 5px;
  align-items: center;
`;

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
    return props.id !== '' && props.password !== '' ? PRIMARY_NORMAL : LIGHT_GRAY;
  }};
  border: 1px ${LIGHT_GRAY};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  color: white;
  font-size: 20px;
  letter-spacing: -0.75px;
`;

const DivideLine = styled.View`
  height: 24px;
`;

const SignUpFindButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SignUpFindPwButton = styled.TouchableOpacity``;

const SignUpFindPwContent = styled(TextStyle)`
  font-family: ${NK500};
  color: ${MEDIUM_GRAY};
  font-size: 16px;
  letter-spacing: -0.48px;
`;
