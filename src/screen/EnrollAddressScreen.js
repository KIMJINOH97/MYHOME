import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import Postcode from 'react-native-daum-postcode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Title from '../util/Title';
import InfoText from '../util/InfoText';
import { InputStyle } from '../util/Input';
import CompleteButton from '../util/CompleteButton';

import { useRecoilState } from 'recoil';
import {
  putHomeState,
  addressState,
  postNumberState,
  detailAddressState,
} from '../states/PutHomeState';
import { TextStyle } from '../util/TextStyle';
import { PRIMARY_NORMAL, MEDIUM_GRAY, LIGHT_GRAY } from '../util/Color';

const EnrollAddressScreen = ({ navigation }) => {
  const [detailAddress, setDetailAddress] = useRecoilState(detailAddressState);
  const [address, setAddress] = useRecoilState(addressState);
  const [postNumber, setPostNumber] = useRecoilState(postNumberState);
  const [home, setHome] = useRecoilState(putHomeState);
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState('');

  const onChangeDetail = (detail) => {
    setHome({ ...home, address_detail: detail });
  };

  const writeAddr = async () => {
    console.log(home.address, home.zip_code);
    if (
      home.address === '주소지를 입력해주세요.' ||
      home.zip_code === '우편번호'
    ) {
      Alert.alert('', '우편번호 찾기로 주소를 입력해주세요');
      return;
    } else if (home.detailAddress === '') {
      Alert.alert('', '상세주소를 입력해주세요.');
      return;
    }
    navigation.pop();
  };

  return (
    <Wrapper>
      <Title name="주소 등록"></Title>
      {isOpen ? (
        <Postcode
          style={{ width: '100%', height: '100%' }}
          jsOptions={{ animated: true }}
          onSelected={(data) => {
            const {
              userSelectedType,
              roadAddress,
              jibunAddress,
              zonecode,
            } = data;
            console.log({ ...home, address: roadAddress });
            // if (userSelectedType === 'R')
            //   setHome({ ...home, address: roadAddress });
            // else setHome({ ...home, address: jibunAddress });
            setIsOpen(!isOpen);
            setHome({
              ...home,
              address: userSelectedType === 'R' ? roadAddress : jibunAddress,
              zip_code: zonecode,
            });
            return;
          }}
        />
      ) : (
        <>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAwareScrollView>
              <AddressContainer>
                <InfoText name="우편번호" />
                <PostNumberBox>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => setIsOpen(!isOpen)}
                  >
                    <PostNumberView>
                      <PostNumberText>{home.zip_code}</PostNumberText>
                    </PostNumberView>
                    <PostNumberButtonView>
                      <PostNumberButtonText>우편번호 찾기</PostNumberButtonText>
                    </PostNumberButtonView>
                  </TouchableOpacity>
                </PostNumberBox>
                <InfoText name="주소지" />
                <AddressView>
                  <AddressText>{home.address}</AddressText>
                </AddressView>
                <InfoText name="상세주소" />
                <DetailInput
                  placeholder="상세주소를 입력해주세요."
                  onChangeText={onChangeDetail}
                  defaultValue={home.address_detail ? home.address_detail : ''}
                />
              </AddressContainer>
            </KeyboardAwareScrollView>
          </TouchableWithoutFeedback>
          <CompleteButton onPress={writeAddr} name="주소 등록 완료" />
        </>
      )}
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
  aspect-ratio: 0.8;
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
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 7px;
`;

const PostNumberText = styled(TextStyle)`
  color: ${MEDIUM_GRAY};
`;

const PostNumberButtonView = styled.View`
  width: 47%;
  height: 40px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid ${PRIMARY_NORMAL};
  border-radius: 5px;
`;
const PostNumberButtonText = styled(TextStyle)`
  color: ${PRIMARY_NORMAL};
`;

const AddressView = styled(PostNumberView)`
  width: 100%;
`;

const AddressText = styled(TextStyle)`
  color: ${MEDIUM_GRAY};
`;

const DetailInput = styled(InputStyle)`
  height: 40px;
`;
