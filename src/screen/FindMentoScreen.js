import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import Stars from 'react-native-stars';
import TabTitle from '../util/TabTitle';
import { TextStyle } from '../util/TextStyle';
import { LIGHT_GRAY2, NK400, NK700 } from '../util/Color';

import my from '../../assets/my.png';
import MENTO_MAP from '../../assets/MENTO_MAP.png';
import STAR_FULL from '../../assets/STAR_FULL.png';
import STAR_EMPTY from '../../assets/STAR_EMPTY.png';
import { useRecoilState } from 'recoil';
import { mentoState } from '../states/MentoState';
import { mentoApi } from '../api/index';

const FindMentoList = ({ item }) => {
  const { name, introduction } = item;
  return (
    <FindMentoListFrame style={styles.container}>
      <FindMentoComment>
        <CommentContent>{introduction}</CommentContent>
      </FindMentoComment>
      <ProfileBox>
        <FindMentoProfile>
          <MentoProfile>
            <ProfileImage source={my} />
          </MentoProfile>
          <MentoName>
            <MentoNameContent>{name}</MentoNameContent>
          </MentoName>
          <Stars
            display={5}
            default={0}
            count={5}
            half={true}
            starSize={5}
            fullStar={
              <Image style={{ width: 13, height: 12 }} source={STAR_FULL} />
            }
            emptyStar={
              <Image style={{ width: 13, height: 12 }} source={STAR_EMPTY} />
            }
          />
        </FindMentoProfile>
        <RegionView>
          <MapPinView>
            <MapPinImage source={MENTO_MAP} />
          </MapPinView>
          <RegionContentView>
            <RegionContent>신촌</RegionContent>
          </RegionContentView>
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

const FindMentoComment = styled.View``;

const CommentContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 14px;
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

const MentoName = styled.View`
  margin-horizontal: 10px;
`;

const MentoNameContent = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  color: #333333;
`;

const RegionView = styled.View`
  flex-direction: row;
  background-color: ${LIGHT_GRAY2};
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

const RegionContentView = styled.View``;

const RegionContent = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 12px;
`;

const FindMentoScreen = ({ navigation }) => {
  const [mentoList, setMentoList] = useRecoilState(mentoState);

  const getData = async () => {
    try {
      const result = await mentoApi.getMento();
      setMentoList(result);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <TabTitle name="멘토찾기" />
      <MentoListContainer>
        {mentoList ? (
          <FlatList
            data={mentoList}
            style={{ flex: 11 }}
            renderItem={({ item, index }) => {
              return <FindMentoList key={index} item={item} />;
            }}
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
