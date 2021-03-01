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
        <MyhomeMenu>
          <MyhomeTitle />
          <HomiImage source={HOMIF} />
          <MyhomeSlogan goPage={goPage} />
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
                    room_type={item.room_type}
                  />
                );
              }}
              keyExtractor={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={false}
            />
          </LookHome>
        </MyhomeMenu>
        <VRContainer>
          <VRMenu>
            <UtilText
              family={NK700}
              size="16px"
              content="VR 키트 신청하기"
              color={PRIMARY_NORMAL}
            />
          </VRMenu>
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
        </VRContainer>
      </HomeContainer>
    </Wrapper>
  );
};

export default HomePresenter;

const Wrapper = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  padding-top: 15px;
`;

const HomeContainer = styled.ScrollView``;

const HomiImage = styled.Image`
  height: 168px;
  width: 133px;
  position: absolute;
  top: 80px;
  right: 0.5%;
  z-index: 999;
`;

const MyhomeMenu = styled.View`
  padding-horizontal: 16px;
`;

const LookHome = styled.View``;

const VRContainer = styled.View`
  padding-horizontal: 10px;
`;

const VRMenu = styled.View`
  padding-horizontal: 6px;
`;

const VRBox = styled.View`
  shadow-color: #000;
  shadow-opacity: 0.9;
  border-radius: 10px;
  margin: 5px;
  padding-top: 9px;
  margin-horizontal: 16px;
  background-color: white;
  height: 160px;
  elevation: 3;
  flex-direction: row;
`;

const VRImageView = styled.View`
  margin-right: 24px;
  justify-content: flex-end;
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
