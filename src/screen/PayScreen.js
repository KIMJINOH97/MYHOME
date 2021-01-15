import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Text, Platform, Dimensions } from 'react-native';

import Title from '../util/Title';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextStyle } from '../util/TextStyle';

import {
  DARK_GRAY,
  LIGHT_GRAY,
  LIGHT_GRAY2,
  MEDIUM_GRAY,
  NK400,
  NK500,
  NK700,
  PRIMARY_NORMAL,
} from '../util/Color';
import DivideLine from '../util/DivideLine';
import UtilText from '../util/UtilText';
import UtilButton from '../util/UtilButton';
import { InputStyle } from '../util/Input';

const PayScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <Title name="결제하기" />
      <KeyboardAwareScrollView>
        <PayContainer>
          <PayBox>
            <TotalPayMoney>
              <UtilText
                content="총 결제금액"
                size="16px"
                family={NK500}
                letter="-0.48px"
              />
              <MoneyBox>
                <UtilText
                  content="30,000"
                  size="45px"
                  family={NK700}
                  letter="-1.6px"
                  color={PRIMARY_NORMAL}
                />
                <MoneyContent>
                  <UtilText
                    content="원"
                    size="24px"
                    family={NK700}
                    letter="-1.2px"
                  />
                </MoneyContent>
              </MoneyBox>
            </TotalPayMoney>
            <DivideLine height="8px" color={'rgba(238, 238, 238, 0.5)'} />
            <AddressBox>
              <AddressInfo>
                <UtilText
                  content="계좌번호"
                  size="16px"
                  color={MEDIUM_GRAY}
                  family={NK500}
                  letter="-0.48px"
                />
                <UtilText
                  content="신한은행 000-0000-0000"
                  size="16px"
                  color={DARK_GRAY}
                  family={NK500}
                  letter="-0.48px"
                />
              </AddressInfo>
              <AddressInfo>
                <UtilText
                  content="계좌명"
                  size="16px"
                  color={MEDIUM_GRAY}
                  family={NK500}
                  letter="-0.48px"
                />
                <UtilText
                  content="(주)마이홈"
                  size="16px"
                  color={DARK_GRAY}
                  family={NK500}
                  letter="-0.48px"
                />
              </AddressInfo>
              <AddressInfo align="flex-start">
                <UtilText
                  style={{ padding: 4 }}
                  content="입금자명"
                  size="16px"
                  color={MEDIUM_GRAY}
                  family={NK500}
                  letter="-0.48px"
                />
                <Input width="136px" placeholder="이름" />
              </AddressInfo>
            </AddressBox>
            <DivideLine height="1px" color={'rgba(238, 238, 238, 0.5)'} />
          </PayBox>
          <ChangeAddress>
            <CheckView>
              <UtilText
                content="ㆍ계약 미성사 시 환불 받으실 계좌번호를 알려주세요."
                size="12px"
                color={PRIMARY_NORMAL}
                family={NK500}
              />
            </CheckView>
            <InputView>
              <Input width="27%" placeholder="은행" />
              <Input width="70%" placeholder="계좌번호" />
            </InputView>
          </ChangeAddress>
          <ButtonView>
            <UtilButton
              name="결제하기"
              onPress={() => navigation.navigate('PayComplete')}
            />
          </ButtonView>
        </PayContainer>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default PayScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const PayContainer = styled.View`
  margin-top: 24px;
`;

const PayBox = styled.View``;

const TotalPayMoney = styled.View`
  padding-horizontal: 32px;
  margin-bottom: 24px;
`;

const MoneyBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MoneyContent = styled.View`
  margin-left: 3px;
  height: 32px;
`;

const AddressBox = styled.View`
  padding-horizontal: 32px;
  padding-top: 14px;
  padding-bottom: 10px;
`;
const AddressInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: ${({ align }) => (align ? align : 'center')};
  margin-bottom: 10px;
`;

const ButtonView = styled.View`
  width: 100%;
  justify-content: flex-end;
  padding-horizontal: 16px;
`;

const ChangeAddress = styled.View`
  padding: 16px;
`;

const Input = styled(InputStyle)`
  width: ${({ width }) => (width ? width : '100%')};
`;

const CheckView = styled.View`
  background-color: rgba(238, 238, 238, 0.5);
  border-radius: 4px;
  height: 32px;
  justify-content: center;
  margin-bottom: 16px;
  padding-left: 8px;
`;

const InputView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
