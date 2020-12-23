import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, FlatList } from 'react-native';

import HomeListFrame from '../components/HomeList/HomeListFrame';

const DummyList = [
  {
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
        renderItem={({ item }) => {
          return (
            <HomeListButton
              title="list"
              onPress={() => navigation.push('Map', item)}
            >
              <HomeListFrame
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
      />
      {/* {list.map((v, i) => {
          return <HomeListFrame key={i} Content={v} />;
        })} */}
    </Wrapper>
  );
};

export default HomeListScreen;

const Wrapper = styled.View`
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
