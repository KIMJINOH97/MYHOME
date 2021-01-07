import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { TextStyle } from '../util/TextStyle';
import { NK700, NK500, NK100, LIGHT_GRAY2, DARK_GRAY } from '../util/Color';
import Title from '../util/Title';
import WantListFrame from '../components/ApplyMento/WantListFrame';

import APPLY_MAIL from '../../assets/APPLY_MAIL.png';

const ApplyMento = () => {
  return (
    <Wrapper>
      <Title name="멘토 등록하기"></Title>
      <ApplyContainer>
        <ApplyTitle>
          <ApplyContent>
            멘토 등록을 위해서{'\n'}아래 이메일로 문의 바랍니다.
          </ApplyContent>
        </ApplyTitle>
        <Mail>
          <MailAddress>
            <MailIcon>
              <MailIconImage source={APPLY_MAIL} />
            </MailIcon>
            <MailAddressView>
              <MailAddressContnet>myhome@gmail.com</MailAddressContnet>
            </MailAddressView>
          </MailAddress>
        </Mail>
        <WantPerson>
          <WantTitle>
            <WantContent>이런 분을 원해요!</WantContent>
          </WantTitle>
          <WantList>
            <WantListFrame content="공인중개사 자격증을 소지한 분" />
            <WantListFrame content="개업 공인중개사가 아닌 분" />
            <WantListFrame
              content={`가지고 있는 능력을 활용해${'\n'}부동산을 모르는 사람들에게 도움을 주고 싶은 분`}
            />
          </WantList>
        </WantPerson>
      </ApplyContainer>
    </Wrapper>
  );
};

export default ApplyMento;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const ApplyContainer = styled.View`
  flex: 11;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

const ApplyTitle = styled.View`
  flex: 1;
`;

const ApplyContent = styled(TextStyle)`
  font-family: ${NK700};
  letter-spacing: -1.2px;
  font-size: 24px;
`;

const Mail = styled.View`
  flex: 1;
`;

const MailAddress = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  padding-horizontal: 12px;
  background-color: ${LIGHT_GRAY2};
  align-items: center;

  border-radius: 8px;
`;

const MailIcon = styled.View`
  width: 20px;
  height: 16px;
  margin-right: 12px;
`;

const MailIconImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const MailAddressView = styled.View``;

const MailAddressContnet = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  color: ${DARK_GRAY};
  letter-spacing: -0.48px;
`;

const WantPerson = styled.View`
  flex: 4.5;
`;

const WantTitle = styled.View`
  height: 24px;
  margin-bottom: 16px;
`;

const WantContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  letter-spacing: -0.54px;
`;

const WantList = styled.View`
  height: 24px;
`;
