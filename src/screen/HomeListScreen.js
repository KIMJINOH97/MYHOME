import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight, Modal, StatusBar, View } from 'react-native';

import HomeListFrame from '../components/HomeList/HomeListFrame';
import Title from '../util/Title';

import { useRecoilState } from 'recoil';
import { homeListState } from '../states/HomeListState';
import { FilterState } from '../states/FilterState';
import { LIGHT_GRAY, LIGHT_GRAY2, NK700, NK500 } from '../util/Color';
import CompleteButton from '../util/CompleteButton';
import UtilText from '../util/UtilText';
import LIST_FILTER from '../../assets/LIST_FILTER.png';
import InputSlider from '../components/HomeList/InputSlider';
import SelectButton from '../components/Enroll/SelectButton';
import DivideLine from '../util/DivideLine';

const HomeListScreen = ({ navigation }) => {
  const [list, setList] = useRecoilState(homeListState);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useRecoilState(FilterState);

  const menu = [
    { title: '원룸' },
    { title: '보증금' },
    { title: '월세금' },
    { title: '관리비' },
    { title: '평수' },
  ];

  return (
    <Wrapper>
      <Title name="매물" />
      <Modal visible={isVisible} animationType="slide">
        <Title
          name="필터"
          close={true}
          onPress={() => setIsVisible(!isVisible)}
        />
        <ModalContainer>
          <UtilText
            content="방종류"
            family={NK500}
            letter="-0.54px"
            size="18px"
          />
          <DivideLine height="16px" color="white" />
          <RoomMenu>
            <SelectButton
              onChange={() => setFilter({ ...filter, room_type: '원룸' })}
              data={filter.room_type === '원룸'}
              name="원룸"
            />
            <SelectButton
              onChange={() => setFilter({ ...filter, room_type: '투룸' })}
              data={filter.room_type === '투룸'}
              name="투룸"
            />
            <SelectButton
              onChange={() => setFilter({ ...filter, room_type: '쓰리룸' })}
              data={filter.room_type === '쓰리룸'}
              name="쓰리룸"
            />
          </RoomMenu>
          <UtilText
            content="보증금"
            family={NK500}
            letter="-0.54px"
            size="18px"
          />
          <DivideLine height="16px" color="white" />
          <InputSlider />
        </ModalContainer>
        <CompleteButton name="적용하기" />
      </Modal>
      <FilterBar>
        <FilterMenuBar>
          <FilterScroll
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {menu.map((list, index) => (
              <FilterMenu key={index}>
                <UtilText
                  content={list.title}
                  family={NK700}
                  letter="-0.48px"
                  color={LIGHT_GRAY}
                  size="16px"
                />
              </FilterMenu>
            ))}
            <View style={{ width: 20 }} />
          </FilterScroll>
        </FilterMenuBar>
        <FilterImageView>
          <TouchableHighlight
            onPress={() => setIsVisible(!isVisible)}
            underlayColor={LIGHT_GRAY2}
          >
            <FilterImage source={LIST_FILTER} />
          </TouchableHighlight>
        </FilterImageView>
      </FilterBar>
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
  flex-direction: row;
  height: 48px;
  padding-right: 8px;
  background-color: rgba(238, 238, 238, 0.4);
  align-items: center;
`;

const FilterMenuBar = styled.View`
  width: 88%;
`;

const FilterScroll = styled.ScrollView`
  padding-horizontal: 16px;
  padding-right: 32px;
  padding-vertical: 8px;
`;

const FilterImageView = styled.View`
  z-index: 1;
  background-color: ${LIGHT_GRAY2};
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

const FilterMenu = styled.View`
  display: flex;
  border-radius: 8px;
  margin-right: 8px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  elevation: 1;
`;

const FilterImage = styled.Image`
  width: 32px;
  height: 32px;
`;

const ModalContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const RoomMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HomeList = styled.FlatList`
  flex: 10;
`;

const HomeListButton = styled.TouchableOpacity`
  flex: 1;
`;
