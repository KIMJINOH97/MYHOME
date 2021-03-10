import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, StatusBar, Platform, Dimensions } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Title from '../../../util/Title';
import { PRIMARY_NORMAL, MEDIUM_GRAY, NK700, NK400, NK500 } from '../../../util/Color';
import DivideLine from '../../../util/DivideLine';
import UtilText from '../../../util/UtilText';
import UtilButton from '../../../util/UtilButton';
import HOME_ICON from '../../../../assets/HOME_ICON.png';

const FirstRoute = () => {
  return (
    <>
      <ReserveList>
        <UtilText
          content="2/4 pm 4:00 예약 대기"
          color={PRIMARY_NORMAL}
          size="18px"
          family={NK700}
        />
        <EstateName>
          <EstateImage source={HOME_ICON} />
          <UtilText content="대림 부동산" color={MEDIUM_GRAY} size="15px" family={NK700} />
        </EstateName>
        <RoomContent>
          <UtilText content="신촌 스테이 하이" size="15px" family={NK500} />
          <UtilText
            content="월세 100/100 원룸 4층 | 10평 | 관리비 4만"
            color={MEDIUM_GRAY}
            size="15px"
            family={NK400}
          />
        </RoomContent>
        <UtilButton name="예약 변경" />
      </ReserveList>
      <DivideLine height="10px" color="rgba(238, 238, 238, 0.5)" />
    </>
  );
};

const ReserveList = styled.View`
  padding: 16px;
  height: 250px;
  justify-content: space-around;
`;

const RoomContent = styled.View`
  height: 80px;
  padding: 12px;
  background-color: rgba(238, 238, 238, 0.5);
  border-radius: 8px;
  justify-content: space-around;
`;

const EstateName = styled.View`
  height: 24px;
  align-items: center;
  flex-direction: row;
`;

const EstateImage = styled.Image`
  height: 24px;
  width: 24px;
  margin-right: 6px;
`;

const SecondRoute = () => {
  return <View />;
};
const initialLayout = { width: Dimensions.get('window').width };

const ReservationPresenter = () => {
  const [routes] = useState([
    {
      key: 'first',
      title: '예약 확인',
    },
    {
      key: 'second',
      title: '결제 대기',
    },
  ]);
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <Title back={false} name="예약 확인" />
      <DivideLine height="10px" />
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: PRIMARY_NORMAL,
            }}
            style={{
              backgroundColor: 'white',
              elevation: 0,
            }}
            labelStyle={{
              alignItems: 'center',
              fontFamily: NK700,
              fontSize: 14,
              includeFontPadding: false,
            }}
            activeColor={PRIMARY_NORMAL}
            inactiveColor={MEDIUM_GRAY}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: () => <FirstRoute />,
          second: () => <SecondRoute />,
        })}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Wrapper>
  );
};

export default ReservationPresenter;

const Wrapper = styled.View`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
  background-color: white;
`;
