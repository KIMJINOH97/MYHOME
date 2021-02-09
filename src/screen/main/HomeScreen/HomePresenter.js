import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, FlatList } from 'react-native';

import MyhomeTitle from '../../../components/Myhome/MyhomeTitle';
import MyhomeSlogan from '../../../components/Myhome/MyhomeSlogan';
import MyhomeMenuName from '../../../components/Myhome/MyhomeMenuName';
import LookHomeList from '../../../components/Myhome/LookHomeList';
import MentoBox from '../../../components/Myhome/MentoBox';
import HOMIF from '../../../../assets/HOMIF.png';

const HomePresenter = ({ goPage, homeList, mentoList }) => {
  return (
    <Wrapper>
      <HomeContainer>
        <MyhomeTitle />
        <HomiImage source={HOMIF} />
        <MyhomeSlogan goPage={goPage} />
        <MyhomeMenu>
          <RecommandMento>
            <MyhomeMenuName onPress={() => goPage('FindMento')} name="추천 멘토" />
            <FlatList
              data={mentoList}
              horizontal
              renderItem={({ item }) => {
                return <MentoBox name={item.name} comment={item.introduction} score={5} />;
              }}
              keyExtractor={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={false}
            />
          </RecommandMento>
          <LookHome>
            <MyhomeMenuName onPress={() => goPage('HomeList')} name="매물 보기" />
            <FlatList
              data={homeList}
              horizontal
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

export default HomePresenter;

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
