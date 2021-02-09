import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import { NK700, LIGHT_GRAY2, DARK_GRAY } from '../../../../util/Color';
import Title from '../../../../util/Title';
import WantListFrame from '../../../../components/ApplyMento/WantListFrame';

import APPLY_MAIL from '../../../../../assets/APPLY_MAIL.png';
import UtilText from '../../../../util/UtilText';

const ApplyMentoPresenter = () => {
  return (
    <Wrapper>
      <Title name="멘토 등록하기" />
      <ApplyContainer>
        <ApplyTitle>
          <UtilText
            style={{ marginBottom: 8 }}
            content={`멘토 등록을 위해서${'\n'}아래 이메일로 문의 바랍니다.`}
            family={NK700}
            letter="0.48px"
            size="24px"
          />
        </ApplyTitle>
        <Mail>
          <MailAddress>
            <MailIcon>
              <MailIconImage source={APPLY_MAIL} />
            </MailIcon>
            <UtilText
              content="myhome.go.seoul@gmail.com"
              color={DARK_GRAY}
              letter="0.48px"
              size="16px"
            />
          </MailAddress>
        </Mail>
        <WantPerson>
          <UtilText
            style={{ marginBottom: 16 }}
            content="이런 분을 원해요!"
            size="18px"
            letter="-0.54px"
          />
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

export default ApplyMentoPresenter;

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

const WantPerson = styled.View`
  flex: 4.5;
`;

const WantList = styled.View`
  height: 24px;
`;
