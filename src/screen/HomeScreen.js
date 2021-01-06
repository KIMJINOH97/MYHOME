import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, StatusBar, FlatList } from 'react-native';

import MyhomeTitle from '../components/Myhome/MyhomeTitle';
import MyhomeSlogan from '../components/Myhome/MyhomeSlogan';
import MyhomeMenuName from '../components/Myhome/MyhomeMenuName';
import LookHomeList from '../components/Myhome/LookHomeList';
import MentoBox from '../components/Myhome/MentoBox';
import { PRIMARY_NORMAL, LIGHT_GRAY, NK700, NK500 } from '../util/Color';
import HOMIF from '../../assets/HOMIF.png';

const MENTO_DUMMY = [
  { id: '1', name: '호미들', comment: '안전한 부동산 거래를 도와드립니다.' },
  { id: '2', name: '미호들', comment: '안전한 부동산 거래를 도와드립니다.' },
  { id: '3', name: '들호미', comment: '안전한 부동산 거래를 도와드립니다.' },
];

const HOME_DUMMY = [
  {
    id: '1',
    name: '신촌스테이하이',
    money: '1000/60',
  },
  {
    id: '2',
    name: '홍대스테이하이',
    money: '1000/60',
  },
  {
    id: '3',
    name: '서강스테이하이',
    money: '1000/60',
  },
  {
    id: '4',
    name: '이대스테이하이',
    money: '1000/60',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <MyhomeTitle />
      <HomiImage source={HOMIF} />
      <HomeContainer>
        <MyhomeSlogan navigation={navigation} />
        <MyhomeMenu>
          <RecommandMento>
            <MyhomeMenuName name="추천 멘토" />
            <FlatList
              data={MENTO_DUMMY}
              horizontal={true}
              renderItem={({ item, index }) => {
                return (
                  <MentoBox
                    key={index}
                    name={item.name}
                    comment={item.comment}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </RecommandMento>
          <LookHome>
            <MyhomeMenuName name="매물 보기" />
            <FlatList
              data={HOME_DUMMY}
              horizontal={true}
              renderItem={({ item, index }) => {
                return (
                  <LookHomeList
                    key={index}
                    name={item.name}
                    money={item.money}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </LookHome>
        </MyhomeMenu>
      </HomeContainer>
    </Wrapper>
  );
};

export default HomeScreen;

const Wrapper = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  flex: 1;
  padding-left: 16px;
  padding-right: 15px;
`;

const HomeContainer = styled.View`
  flex: 10;
`;

const HomiImage = styled.Image`
  height: 168px;
  width: 133px;
  position: absolute;
  top: 95px;
  right: 6%;
  z-index: 999;
`;

const MyhomeMenu = styled.View`
  flex: 6.2;
`;

const RecommandMento = styled.View`
  flex: 1;
`;

const LookHome = styled.View`
  flex: 1;
`;
