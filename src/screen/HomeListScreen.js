import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, FlatList, StatusBar } from 'react-native';

import HomeListFrame from '../components/HomeList/HomeListFrame';
import Title from '../util/Title';

import { useRecoilState } from 'recoil';
import { homeListState } from '../states/HomeListState';

const HOME_PICTURE = require('../../assets/HOME_PICTURE.png');
const TITLE_NAME = '매물';

const HomeListScreen = ({ navigation }) => {
  const [list, setList] = useRecoilState(homeListState);

  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <FilterBar></FilterBar>
      <HomeList
        data={list}
        showsVerticalScrollIndicator={false}
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
