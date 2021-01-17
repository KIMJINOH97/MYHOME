import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, StatusBar, FlatList } from 'react-native';

import MyhomeTitle from '../components/Myhome/MyhomeTitle';
import MyhomeSlogan from '../components/Myhome/MyhomeSlogan';
import MyhomeMenuName from '../components/Myhome/MyhomeMenuName';
import LookHomeList from '../components/Myhome/LookHomeList';
import MentoBox from '../components/Myhome/MentoBox';
import { PRIMARY_NORMAL, LIGHT_GRAY, NK700, NK500 } from '../util/Color';
import HOMIF from '../../assets/HOMIF.png';
import { useRecoilState } from 'recoil';
import { mentoState } from '../states/MentoState';
import { mentoApi } from '../api/index';
import { homeListState } from '../states/HomeListState';
import { homeApi } from '../api/index';

const HomeScreen = ({ navigation }) => {
  const [mentoList, setMentoList] = useRecoilState(mentoState);
  const [home, setHome] = useRecoilState(homeListState);

  const getMento = async () => {
    try {
      const result = await mentoApi.getMento();
      setMentoList(result);
    } catch (e) {
      console.error(e);
    }
  };

  const getHome = async () => {
    try {
      const result = await homeApi.getHome();
      setHome(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMento();
    getHome();
  }, []);

  return (
    <Wrapper>
      <HomeContainer>
        <MyhomeTitle />
        <HomiImage source={HOMIF} />
        <MyhomeSlogan navigation={navigation} />
        <MyhomeMenu>
          <RecommandMento>
            <MyhomeMenuName
              onPress={() => navigation.navigate('FindMento')}
              name="추천 멘토"
            />
            <FlatList
              data={mentoList}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <MentoBox
                    name={item.name}
                    comment={item.introduction}
                    score={5}
                  />
                );
              }}
              keyExtractor={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={false}
            />
          </RecommandMento>
          <LookHome>
            <MyhomeMenuName
              onPress={() => navigation.navigate('HomeList')}
              name="매물 보기"
            />
            <FlatList
              data={home}
              horizontal={true}
              renderItem={({ item, index }) => {
                return (
                  <LookHomeList
                    key={index}
                    photo={item.photos[0] ? item.photos[0].photo_file : null}
                    name={item.name ? item.name : '신촌 스테이하이'}
                    money={`${item.deposit}/${item.monthly_rent}`}
                  />
                );
              }}
              keyExtractor={(item) => `${item.id}`}
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
`;

const HomeContainer = styled.View`
  flex: 10;
  padding-horizontal: 16px;
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
