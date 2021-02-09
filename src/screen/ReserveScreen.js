import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import { useRecoilState } from 'recoil';

import Title from '../util/Title';
import { FindMentoList } from './main/MentoScreen/FindMentoScreen/FindMentoPresenter';
import { TextStyle } from '../util/TextStyle';
import { presentMentoState } from '../states/MentoState';
import { DARK_GRAY, NK400, NK700, PRIMARY_NORMAL } from '../util/Color';
import DivideLine from '../util/DivideLine';
import UtilText from '../util/UtilText';
import UtilButton from '../util/UtilButton';

const ReserveScreen = ({ navigation }) => {
  const [mento] = useRecoilState(presentMentoState);

  return (
    <Wrapper>
      <Title name="예약하기" />
      <ReserveContainer>
        <SummaryMento>
          <FindMentoList item={mento} />
        </SummaryMento>
        <DivideLine height="8px" color='rgba(238, 238, 238, 0.5)' />
        <MoneyBox>
          <MoneyContentBox>
            <UtilText
              content="총 상품금액"
              size="14px"
              color="#333333"
              family={NK400}
              letter="-0.14px"
            />
            <UtilText
              content="50000"
              size="15px"
              family={NK700}
              letter="-0.45px"
            />
          </MoneyContentBox>
          <MoneyContentBox>
            <UtilText
              content="할인예상금액: 오픈기념 이벤트"
              size="14px"
              color="#333333"
              family={NK400}
              letter="-0.14px"
            />
            <UtilText
              content="-20000"
              size="15px"
              family={NK700}
              color={PRIMARY_NORMAL}
              letter="-0.45px"
            />
          </MoneyContentBox>
          <DivideLine height="1px" color={DARK_GRAY} />
          <MoneyContentBox style={{ marginTop: 8 }}>
            <UtilText
              content="총 결제금액"
              size="18px"
              color="#333333"
              family={NK700}
              letter="-0.54px"
            />
            <UtilText
              content="30000"
              size="24px"
              family={NK700}
              color={PRIMARY_NORMAL}
              letter="-1.2px"
            />
          </MoneyContentBox>
        </MoneyBox>
        <ButtonView>
          <UtilButton name="다음" onPress={() => navigation.navigate('Pay')} />
        </ButtonView>
      </ReserveContainer>
    </Wrapper>
  );
};

export default ReserveScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const ReserveContainer = styled.View`
  flex: 11;
`;

const SummaryMento = styled.View`
  padding: 16px;
`;

const MoneyBox = styled.View`
  flex: 8;
  margin-top: 15px;
  padding-horizontal: 30px;
`;

const MoneyContentBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonView = styled.View`
  flex: 3;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding-horizontal: 16px;
`;
