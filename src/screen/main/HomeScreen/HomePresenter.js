import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, FlatList } from 'react-native';

import MyhomeTitle from '../../../components/Myhome/MyhomeTitle';
import MyhomeSlogan from '../../../components/Myhome/MyhomeSlogan';
import MyhomeMenuName from '../../../components/Myhome/MyhomeMenuName';
import LookHomeList from '../../../components/Myhome/LookHomeList';
import MentoBox from '../../../components/Myhome/MentoBox';
import HOMIF from '../../../../assets/HOMIF.png';
import VRIMAGE from '../../../../assets/VR.png';
import MOREIMAGE from '../../../../assets/MORE.png';
import UtilText from '../../../util/UtilText';
import { NK500, NK700, PRIMARY_NORMAL, MEDIUM_GRAY } from '../../../util/Color';

const HomePresenter = ({ goPage, homeList, mentoList }) => {
  return (
    <Wrapper>
      <HomeContainer>
        <MyhomeTitle />
        <HomiImage source={HOMIF} />
        <MyhomeSlogan goPage={goPage} />
        <MyhomeMenu>
          {/* <RecommandMento>
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
          </RecommandMento> */}
          <LookHome>
            <MyhomeMenuName onPress={() => goPage('HomeList')} name="같이 둘러볼까요?" />
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
          <UtilText family={NK700} size="16px" content="VR 키트 신청하기" color={PRIMARY_NORMAL} />
          <VRBox>
            <VRImageView>
              <VRImage source={VRIMAGE} />
            </VRImageView>
            <VRComment>
              <UtilText family={NK700} size="30px" content="VR 키트" />
              <UtilText family={NK700} size="24px" content="받아보기" />
              <ConnectButton>
                <UtilText family={NK500} color={MEDIUM_GRAY} size="16px" content="상담사 연결" />
                <MoreView>
                  <MoreImage source={MOREIMAGE} />
                </MoreView>
              </ConnectButton>
            </VRComment>
          </VRBox>
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

const VRBox = styled.View`
  margin-top: 8px;
  padding-top: 13px;
  padding-left: 8px;
  height: 160px;
  elevation: 5;
  flex-direction: row;
`;

const VRImageView = styled.View`
  margin-right: 24px;
`;

const VRImage = styled.Image`
  height: 140px;
  width: 160px;
`;

const ConnectButton = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

const MoreView = styled.View`
  margin-left: 10px;
  height: 24px;
  width: 12px;
  justify-content: center;
`;

const MoreImage = styled.Image`
  height: 20px;
  width: 12px;
`;

const VRComment = styled.View``;
