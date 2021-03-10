import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';
import { NK500 } from '../../../../util/Color';
import UtilText from '../../../../util/UtilText';
import WayOrder from '../../../../components/ApplyMento/WayOrder';
import DivideLine from '../../../../util/DivideLine';
import Title from '../../../../util/Title';

const WAY_LIST = [
  {
    number: '01',
    order: '마이홈 app 접속',
    content: ['원하는 조건의 매물을', '관심매물에 추가해보세요.'],
  },
  {
    number: '02',
    order: '마이홈 상담사 연결',
    content: [`콜센터를 통해 마이홈의 상담사와`, '연결 해드릴게요.'],
  },
  {
    number: '03',
    order: 'VR 키트 받아보기',
    content: [`VR 키트를 준문하고 당일 배송으로 받은 후 VR`, '원격 매물 투어를 준비하세요'],
  },
  {
    number: '04',
    order: 'VR 원격 매물 투어',
    content: [
      '상담사와 함께 VR 원격 매물 투어를 통해',
      '매물을 둘러본 후',
      '방문하고 싶은 매물을 선택하세요.',
    ],
  },

  {
    number: '05',
    order: '매물 투어',
    content: [
      '매물 투어를 위한 예치금',
      '결제가 진행됩니다.',
      '*계약 미성사시 100% 환불해드립니다.',
    ],
  },
  {
    number: '06',
    order: '매물 방문 예약',
    content: [
      '상담사가 마이홈과 제휴를 맺은',
      '주변 공인중개사를 통해 각 관심 매물',
      '방문 예약을 도와드립니다.',
    ],
  },
  {
    number: '07',
    order: '오프라인 매물 확인',
    content: ['예약된 시간에 맞게 오프라인으로', '매물을 확인하실 수 있습니다.'],
  },
  {
    number: '08',
    order: `계약 매물 선택 및${'\n'} 비대면 계약`,
    content: [
      '계약하고 싶은 매물을 선택하시면 비대면 온라인',
      '계약서를 통해 계약이 진행됩니다.',
      '계약 진행 중 계약금 결제를 완료해주세요.',
    ],
  },
  {
    number: '09',
    order: '계약 완료',
    content: [`계약이 완료되었습니다.`],
  },
];

const ApplyMentoPresenter = () => {
  return (
    <Wrapper>
      <Title name="자세히 알아보기" />
      <WayScrollView showsVerticalScrollIndicator={false}>
        <WayContainer>
          {WAY_LIST.map((way, index) => {
            return (
              <>
                <WayOrder key={index} number={way.number} order={way.order} content={way.content} />
                {way.content.map((c, i) => {
                  return (
                    <>
                      <UtilText
                        key={i + 99999}
                        content={c}
                        family={NK500}
                        size="14px"
                        color="#6B6B6B"
                      />
                    </>
                  );
                })}
                <DivideLine height="30px" color="white" />
              </>
            );
          })}
        </WayContainer>
        <DivideLine height="50px" color="white" />
      </WayScrollView>
    </Wrapper>
  );
};

export default ApplyMentoPresenter;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  padding-horizontal: 16px;
`;

const WayContainer = styled.View`
  width: 100%;
  padding-top: 20px;
  align-items: center;
`;

const WayScrollView = styled.ScrollView``;
