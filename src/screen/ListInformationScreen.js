import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import DetailContent from '../components/ListInfromation/DetailContent';
import SimpleList from '../components/ListInfromation/SimpleList';
import DivideLine from '../util/DivideLine';
import { TextStyle } from '../util/TextStyle';
import {
  DARK_GRAY,
  LIGHT_GRAY,
  LIGHT_GRAY2,
  MEDIUM_GRAY,
  NK500,
  NK700,
  PRIMARY_LIGHT2,
  PRIMARY_NORMAL,
} from '../util/Color';
import LIST_HOME from '../../assets/LIST_HOME.png';
import LIST_MANAGE from '../../assets/LIST_MANAGE.png';
import LIST_SIZE from '../../assets/LIST_SIZE.png';
import LIST_FLOOR from '../../assets/LIST_FLOOR.png';
import HOME_PICTURE from '../../assets/HOME_PICTURE.png';

const FirstRoute = ({ information }) => {
  const {
    money,
    bojoung,
    roomType,
    floor,
    size,
    kuanri,
    sogae,
    detail,
  } = information;
  return (
    <>
      <DetailInformation>
        <DetailTitle>
          <DetailTitleContent>상세정보</DetailTitleContent>
        </DetailTitle>
        <DivideLine height="1px" color={LIGHT_GRAY2} />
        <DetailContent name={'방종류'} info={roomType} />
        <DetailContent name={'가격'} info={`${bojoung}/${money}`} />
        <DetailContent name={'관리비'} info={kuanri} />
        <DetailContent name={'층수'} info={floor} />
        <DetailContent name={'실평수'} info={size} />
        <DetailContent name={'준공년도'} info={roomType} />
        <DetailContent
          alignItem="flex-start"
          name={'추가옵션'}
          info={roomType}
        />
        <DetailContent name={'보일러'} info={roomType} />
        <DetailContent name={'입주가능일'} info={roomType} />
        <DetailContent alignItem="flex-start" name={'상세설명'} info={detail} />
      </DetailInformation>
    </>
  );
};

const SecondRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>하하하하하하하</Text>
    </View>
  );
};

const ThirdRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>하하하하하하하</Text>
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const ListInformationScreen = ({ route }) => {
  const {
    title,
    money,
    type,
    roomType,
    size,
    floor,
    kuanri,
    bojoung,
  } = route.params;
  // const home = useNavigation().setParams('item');

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: '정보',
    },
    {
      key: 'second',
      title: '리뷰',
    },
    {
      key: 'third',
      title: '집주인 정보',
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Swiper height={240}>
          <Red>
            <Image
              source={HOME_PICTURE}
              style={{ width: '100%', height: '100%' }}
            />
          </Red>
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
            <SimpleList img={LIST_HOME} info={roomType} />
            <SimpleList img={LIST_SIZE} info={size} />
            <SimpleList img={LIST_FLOOR} info={floor} />
            <SimpleList img={LIST_MANAGE} info={kuanri} />
          </SimpleInformation>
          <TabView
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{
                  backgroundColor: PRIMARY_NORMAL,
                }}
                style={{
                  backgroundColor: '#ffeae8',
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
              first: () => <FirstRoute information={route.params} />,
              second: () => <SecondRoute information={route.params} />,
              third: () => <ThirdRoute information={route.params} />,
            })}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </InfromationContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListInformationScreen;

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
`;

const ListTitle = styled.View`
  justify-content: center;
  align-items: center;
`;

const TitleContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 24px;
  letter-spacing: -1.2px;
`;

const SubContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  color: ${MEDIUM_GRAY};
`;

const SimpleInformation = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  border-top-color: ${LIGHT_GRAY2};
  border-top-width: 1px;
  padding: 10px;
`;

const DetailInformation = styled.View`
  margin-top: 20px;
  padding-horizontal: 16px;
`;

const DetailTitle = styled.View``;

const DetailTitleContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
`;

const DevideLine = styled.View`
  height: 1px;
  background-color: ${DARK_GRAY};
  margin-bottom: 10px;
  margin-top: 10px;
`;
