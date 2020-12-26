import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, FlatList } from 'react-native';

import HomeListFrame from '../components/HomeList/HomeListFrame';

const DummyList = [
  {
    id: '1',
    title: '신촌스테이하이',
    type: '월세',
    money: 45,
    bojoung: 1000,
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
    title: '신촌스테이하이',
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
    title: '신촌스테이하이',
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
  const [list, setList] = useState(DummyList);
  return (
    <Wrapper>
      <FilterBar></FilterBar>
      <HomeList
        data={list}
        renderItem={({ item, index }) => {
          return (
            <HomeListButton
              title="list"
              onPress={() => navigation.navigate('ListInformation', item)}
            >
              <HomeListFrame
                key={index}
                title={item.title}
                type={item.type}
                money={item.money}
                bojoung={item.bojoung}
                roomType={item.roomType}
                floor={item.floor}
                size={item.size}
                kuanri={item.kuanri}
                sogae={item.sogae}
              />
            </HomeListButton>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      {/* {list.map((v, i) => {
          return <HomeListFrame key={i} Content={v} />;
        })} */}
    </Wrapper>
  );
};

export default HomeListScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const FilterBar = styled.View`
  flex: 1;
  background-color: yellow;
`;

const HomeList = styled.FlatList`
  flex: 9;
  background-color: red;
`;

const HomeListButton = styled.TouchableOpacity`
  flex: 1;
`;
