import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

import DetailContent from '../components/ListInfromation/DetailContent';

const ListInformationScreen = ({ route, navigation }) => {
  const {
    title,
    type,
    money,
    bojoung,
    roomType,
    floor,
    size,
    kuanri,
    sogae,
    detail,
  } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Swiper height={220}>
          <Red />
          <Yellow />
          <Blue />
        </Swiper>
        <InfromationContainer>
          <ListTitle>
            <TitleContent>
              {type} {bojoung}/{money}
            </TitleContent>
            <SubContent>{title}</SubContent>
          </ListTitle>
          <SimpleInformation>
            <SimpleContent>{roomType}</SimpleContent>
            <SimpleContent>{size}</SimpleContent>
            <SimpleContent>{floor}</SimpleContent>
            <SimpleContent>{kuanri}</SimpleContent>
          </SimpleInformation>
          <DetailInformation>
            <DetailTitle>상세정보</DetailTitle>
          </DetailInformation>
          <DevideLine />
          <DetailContent name={'방종류'} info={roomType} />
          <DetailContent name={'가격'} info={`${bojoung}/${money}`} />
          <DetailContent name={'관리비'} info={kuanri} />
          <DetailContent name={'층수'} info={floor} />
          <DetailContent name={'실평수'} info={size} />
          <DetailContent name={'준공년도'} info={roomType} />
          <DetailContent name={'추가옵션'} info={roomType} />
          <DetailContent name={'보일러'} info={roomType} />
          <DetailContent name={'입주가능일'} info={roomType} />
          <DetailContent name={'상세설명'} info={detail} />
        </InfromationContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListInformationScreen;

const HomePicture = styled.View`
  flex: 1;
`;

const Red = styled.View`
  flex: 1;
  background-color: red;
`;
const Yellow = styled.View`
  flex: 1;
  background-color: yellow;
`;
const Blue = styled.View`
  flex: 1;
  background-color: blue;
`;

const InfromationContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

const ListTitle = styled.View`
  justify-content: center;
  align-items: center;
`;
const TitleContent = styled.Text`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1px;
`;
const SubContent = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #616161;
`;

const SimpleInformation = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
const SimpleContent = styled.Text`
  color: #9e9e9e;
  font-weight: 700;
`;

const DetailInformation = styled.View`
  margin-top: 20px;
`;

const DetailTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

const DevideLine = styled.View`
  height: 1px;
  background-color: #9e9e9e;
  margin-bottom: 10px;
  margin-top: 10px;
`;
