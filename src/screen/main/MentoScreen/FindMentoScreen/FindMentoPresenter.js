import React from 'react';
import { FlatList, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { useRecoilState } from 'recoil';
import TabTitle from '../../../../util/TabTitle';
import { NK400, NK700 } from '../../../../util/Color';
import { mentoState } from '../../../../states/MentoState';

import my from '../../../../../assets/my.png';
import MENTO_MAP from '../../../../../assets/MENTO_MAP.png';

import Star from '../../../../util/Star';
import UtilText from '../../../../util/UtilText';

export const FindMentoList = ({ item, goPage }) => {
  const { name, introduction } = item;
  return (
    <FindMentoListFrame style={styles.container}>
      <UtilText content={`${introduction}`} family={NK700} size="14px" />
      <ProfileBox>
        <FindMentoProfile>
          <MentoProfile>
            <ProfileImage source={my} />
          </MentoProfile>
          <UtilText
            style={{ marginHorizontal: 10 }}
            content={`${name}`}
            family={NK400}
            size="14px"
            color="#333333"
          />
          <Star score={4.5} />
        </FindMentoProfile>
        <RegionView>
          <MapPinView>
            <MapPinImage source={MENTO_MAP} />
          </MapPinView>
          <UtilText content="신촌" family={NK400} size="12px" />
        </RegionView>
      </ProfileBox>
    </FindMentoListFrame>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
});

const FindMentoListFrame = styled.View`
  height: 96px;
  border-radius: 8px;
  padding-bottom: 16px;
  padding-top: 24px;
  padding-horizontal: 16px;
  margin-horizontal: 6px;
  margin-vertical: 8px;
  margin-bottom: 8px;
  background-color: white;
  justify-content: space-between;
`;

const ProfileBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FindMentoProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MentoProfile = styled.View`
  width: 24px;
  height: 24px;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RegionView = styled.View`
  flex-direction: row;
  background-color: rgba(248, 248, 248, 1);
  height: 30px;
  align-items: center;
  justify-content: center;
  width: 62px;
  border-radius: 8px;
`;

const MapPinView = styled.View``;

const MapPinImage = styled.Image`
  width: 16px;
  height: 15px;
`;

const FindMentoScreen = ({ goPage }) => {
  const [mentoList] = useRecoilState(mentoState);

  return (
    <Wrapper>
      <TabTitle name="예약 확인" />
      <MentoListContainer>
        {mentoList ? (
          <FlatList
            data={mentoList}
            style={{ flex: 11 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableHighlight
                  underlayColor="white"
                  onPress={() => goPage('MentoDetail', item)}
                >
                  <FindMentoList key={index} item={item} />
                </TouchableHighlight>
              );
            }}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <></>
        )}
      </MentoListContainer>
    </Wrapper>
  );
};

export default FindMentoScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
  background-color: white;
`;

const MentoListContainer = styled.View`
  flex: 11;
  padding-horizontal: 16px;
  margin-top: 8px;
`;
