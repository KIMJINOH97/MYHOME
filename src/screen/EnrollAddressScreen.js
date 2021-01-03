import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Postcode from 'react-native-daum-postcode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../util/Title';
import InfoText from '../util/InfoText';
import Input, { InputStyle } from '../util/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PRIMARY_NOMAL, MEDIUM_GRAY } from '../util/Color';

const EnrollAddressScreen = () => {
  return (
    <Wrapper>
      <Title name="주소 등록"></Title>
      <KeyboardAwareScrollView>
        <AddressContainer>
          <InfoText name="우편번호" />
          <PostNumberBox>
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <PostNumberView>
                <PostNumberText>우편번호</PostNumberText>
              </PostNumberView>
              <PostNumberButtonView>
                <PostNumberButtonText>우편번호 찾기</PostNumberButtonText>
              </PostNumberButtonView>
            </TouchableOpacity>
          </PostNumberBox>
          <InfoText name="주소지" />
          <AddressView>
            <AddressText>주소지를 입력해주세요.</AddressText>
          </AddressView>
          <InfoText name="상세주소" />
          <DetailInput placeholder="상세주소를 입력해주세요." />
        </AddressContainer>
      </KeyboardAwareScrollView>
      <Postcode
        style={{ width: '100%', height: '100%' }}
        jsOptions={{ animated: true }}
        onSelected={(data) => alert(JSON.stringify(data))}
      />
    </Wrapper>
  );
};

export default EnrollAddressScreen;
const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const AddressContainer = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 15px;
`;

const PostNumberBox = styled.View`
  width: 100%;
`;

const PostNumberView = styled.View`
  width: 47%;
  height: 40px;
  padding: 6px;
  justify-content: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 7px;
`;

const PostNumberText = styled.Text`
  color: ${MEDIUM_GRAY};
`;

const PostNumberButtonView = styled.View`
  width: 47%;
  height: 40px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid ${PRIMARY_NOMAL};
  border-radius: 5px;
`;
const PostNumberButtonText = styled.Text`
  color: ${PRIMARY_NOMAL};
`;

const AddressView = styled(PostNumberView)`
  width: 100%;
`;
const AddressText = styled.Text`
  color: ${MEDIUM_GRAY};
`;
const DetailInput = styled(InputStyle)``;
