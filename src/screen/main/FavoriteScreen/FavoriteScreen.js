import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { StatusBar, Text, View, Platform } from 'react-native';

import TabTitle from '../../../util/TabTitle';
import HomeListFrame from '../../../components/HomeList/HomeListFrame';
import { TextStyle } from '../../../util/TextStyle';
import { useRecoilState } from 'recoil';
import { userState } from '../../../states/LoginState';
import { LIGHT_GRAY, NK500 } from '../../../util/Color';

import PLEASE_LOGIN from '../../../../assets/PLEASE_LOGIN.png';
import { favoriteHomeState } from '../../../states/HomeListState';

const FavoriteScreen = ({ navigation }) => {
  const [user] = useRecoilState(userState);
  const [favoriteList] = useRecoilState(favoriteHomeState);

  return (
    <Wrapper>
      <TabTitle name="관심매물" />
      <FavoriteContainer>
        {user ? (
          favoriteList &&
          favoriteList.map((v, i) => {
            return (
              <HomeListButton
                key={i}
                title="list"
                onPress={() => navigation.navigate('ListInformation', v)}
              >
                <HomeListFrame item={v} />
              </HomeListButton>
            );
          })
        ) : (
          <>
            <PleaseLoginView>
              <LoginContent>로그인이 필요한 서비스입니다.</LoginContent>
            </PleaseLoginView>
            <HomiImageView>
              <HomiImage source={PLEASE_LOGIN} />
            </HomiImageView>
          </>
        )}
      </FavoriteContainer>
    </Wrapper>
  );
};

export default FavoriteScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const FavoriteContainer = styled.ScrollView`
  flex: 11;
`;

const HomeListButton = styled.TouchableOpacity`
  flex: 1;
`;

const PleaseLoginView = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 20px;
  color: ${LIGHT_GRAY};
`;

const HomiImageView = styled.View`
  flex: 8;
  align-items: center;
`;

const HomiImage = styled.Image`
  height: 303px;
  width: 218px;
`;
