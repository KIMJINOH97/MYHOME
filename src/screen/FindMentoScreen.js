import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import TabTitle from '../util/TabTitle';
import { TextStyle } from '../util/TextStyle';
import { NK400, NK700 } from '../util/Color';

import my from '../../assets/my.png';

const FindMentoList = ({ item }) => {
  const { name, comment } = item;
  return (
    <FindMentoListFrame style={styles.container}>
      <FindMentoComment>
        <CommentContent>{comment}</CommentContent>
      </FindMentoComment>
      <FindMentoProfile>
        <MentoProfile>
          <ProfileImage source={my} />
        </MentoProfile>
        <MentoName>
          <MentoNameContent>{item.name}</MentoNameContent>
        </MentoName>
      </FindMentoProfile>
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
  padding-horizontal: 10px;
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
  margin-left: 10px;
`;

const MentoNameContent = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  color: #333333;
`;

const DUMMY_DATA = [
  {
    id: '1',
    name: '박지성',
    star: 4,
    region: '신촌',
    comment: '안전한 부동산 거래를 도와드립니다.',
  },
  {
    id: '2',
    name: '박지성',
    star: 4,
    region: '신촌',
    comment: '안전한 부동산 거래를 도와드립니다.',
  },
  {
    id: '3',
    name: '박지성',
    star: 4,
    region: '신촌',
    comment: '안전한 부동산 거래를 도와드립니다.',
  },
  {
    id: '4',
    name: '박지성',
    star: 4,
    region: '신촌',
    comment: '안전한 부동산 거래를 도와드립니다.',
  },
  {
    id: '5',
    name: '박지성',
    star: 4,
    region: '신촌',
    comment: '안전한 부동산 거래를 도와드립니다.',
  },
  {
    id: '6',
    name: '박지성',
    star: 4,
    region: '신촌',
    comment: '안전한 부동산 거래를 도와드립니다.',
  },
];

const FindMentoScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TabTitle name="멘토찾기" />
      <MentoListContainer>
        <FlatList
          data={DUMMY_DATA}
          style={{ flex: 11 }}
          renderItem={({ item, index }) => {
            return <FindMentoList id={index} item={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
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
