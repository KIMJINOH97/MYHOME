import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, FlatList, StatusBar } from 'react-native';

import HomeListFrame from '../components/HomeList/HomeListFrame';
import Title from '../util/Title';

import { useRecoilState } from 'recoil';
import { homeListState } from '../states/HomeListState';

const HOME_PICTURE = require('../../assets/HOME_PICTURE.png');
const TITLE_NAME = '매물';
const DummyList = [
  {
    id: '1',
    title: '신촌 스테이 하이',
    image: HOME_PICTURE,
    type: '월세',
    money: 45,
    bojoung: 1000,
    pretenant: [{ 1: 'hi' }, { 2: 'hi' }, { 3: 'hi' }],
    roomType: '원룸',
    floor: '4층',
    size: '8평',
    kuanri: '5만',
    sogae: '최저가 가성비 탑',
    detail:
      '유동인구가 많은 곳이라 보안은 걱정 없으며 건물 내/외부에 CCTV가 설치 되어 있어요! 상수역 도보 4분거리에 위치해 있고~~',
  },
  {
    id: '2',
    title: '홍대 가성비 원룸',
    image: HOME_PICTURE,
    pretenant: [],
    type: '월세',
    money: 50,
    bojoung: 1000,
    roomType: '원룸',
    floor: '3층',
    size: '5평',
    kuanri: '5만',
    sogae: '최저가 가성비 탑',
    detail: '아이고 살기 조아라',
  },
  {
    id: '3',
    title: '신촌 스테이 하이',
    image: HOME_PICTURE,
    pretenant: [{ 1: 'hi' }],
    type: '월세',
    money: 100,
    bojoung: 100,
    roomType: '원룸',
    floor: '4층',
    size: '8평',
    kuanri: '5만',
    sogae: '최저가 가성비 탑',
  },
  {
    id: '4',
    title: '신촌 스테이 하이',
    image: HOME_PICTURE,
    pretenant: [{ 1: 'hi' }],
    type: '월세',
    money: 100,
    bojoung: 100,
    roomType: '원룸',
    floor: '4층',
    size: '8평',
    kuanri: '5만',
    sogae: '최저가 가성비 탑',
  },
  {
    id: '5',
    title: '신촌스테이하이',
    image: HOME_PICTURE,
    pretenant: [],
    type: '월세',
    money: 100,
    bojoung: 100,
    roomType: '원룸',
    floor: '4층',
    size: '8평',
    kuanri: '5만',
    sogae: '최저가 가성비 탑',
  },
];

const HomeListScreen = ({ navigation }) => {
  const [hlist, setHList] = useState(DummyList);
  const [list, setList] = useRecoilState(homeListState);
  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <FilterBar></FilterBar>
      <HomeList
        data={list}
        renderItem={({ item, index }) => {
          return (
            <HomeListButton
              title="list"
              onPress={() => navigation.navigate('ListInformation', item)}
            >
              <HomeListFrame item={item} />
            </HomeListButton>
          );
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </Wrapper>
  );
};

export default HomeListScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: #fff;
`;

const FilterBar = styled.View`
  flex: 1;
  background-color: yellow;
`;

const HomeList = styled.FlatList`
  flex: 10;
`;

const HomeListButton = styled.TouchableOpacity`
  flex: 1;
`;
