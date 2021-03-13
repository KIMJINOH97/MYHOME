import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Title from '../util/Title';

import { TextStyle } from '../util/TextStyle';
import { DARK_GRAY, NK700, PRIMARY_NORMAL, NK500 } from '../util/Color';
import PLEASE_LOGIN from '../../assets/PLEASE_LOGIN.png';
import UtilText from '../util/UtilText';
import DivideLine from '../util/DivideLine';

const PayInformation = ({ title, content }) => {
  return (
    <PayInfo>
      <UtilText content={title} size="16px" letter="-0.48px" color={DARK_GRAY} family={NK500} />
      <UtilText content={content} size="16px" letter="-0.48px" family={NK500} />
    </PayInfo>
  );
};

const PayCompleteScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <Title close onPress={() => navigation.popToTop()} name="계약완료" />
      <CompleteContainer>
        <CheckImageView>
          <CheckImage source={PLEASE_LOGIN} />
        </CheckImageView>
        <CompleteMessageView>
          <UtilText
            content="계약이 완료되었습니다."
            size="24px"
            letter="-1.2px"
            color={PRIMARY_NORMAL}
            family={NK700}
          />
          <DivideLine height="10px" color="white" />
          {/* <UtilText
            content="베타테스트 기간임으로 도우미와"
            size="16px"
            letter="-0.48px"
            color={DARK_GRAY}
            family={NK500}
          />
          <UtilText
            content="직접 연락해 주시기 바랍니다."
            size="16px"
            letter="-0.48px"
            color={DARK_GRAY}
            family={NK500}
          /> */}
        </CompleteMessageView>
        <DivideLine height="16px" color="rgba(238,238,238,0.5)" />
        <PayBox>
          <PayInformation title="결제금액" content="50,000원" />
          <PayInformation title="계좌번호" content="신한은행 000-0000-0000" />
          <PayInformation title="결제금액" content="(주) 마이홈" />
          <PayInformation title="입금자명" content="김마이" />
        </PayBox>
      </CompleteContainer>
    </Wrapper>
  );
};

export default PayCompleteScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const CompleteContainer = styled.ScrollView`
  flex: 1;
`;

const CheckImageView = styled.View`
  justify-content: center;
  padding-top: 10px;
  align-items: center;
`;

const CheckImage = styled.Image`
  height: 303px;
  width: 218px;
`;

const CompleteMessageView = styled.View`
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-vertical: 40px;
`;

const PayBox = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 32px;
`;

const PayInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 8px;
`;
