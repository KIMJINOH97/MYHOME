import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY_LIGHT2, DARK_GRAY, NK500, NK700 } from '../../util/Color';

const MyhomeSlogan = ({ navigation }) => {
  const nextPage = (page) => navigation.push(page);
  return (
    <Wrapper>
      <SloganView>
        <SloganContentView>
          <SloganContentFirst>
            멘토와 함께라면{'\n'}직거래도 무섭지 않아
          </SloganContentFirst>
          <SloganContentSecond>
            매물 찾기부터 계약까지{'\n'}A to Z 도우미 서비스.
          </SloganContentSecond>
        </SloganContentView>
        <MentoApplyButtonView>
          <MentoApplyButton onPress={() => nextPage('ApplyMento')}>
            <MentoApplyButtonContent>멘토신청하기</MentoApplyButtonContent>
          </MentoApplyButton>
        </MentoApplyButtonView>
      </SloganView>
    </Wrapper>
  );
};

export default MyhomeSlogan;

const SloganContentFirst = styled.Text`
  font-family: ${NK700};
  font-size: 22px;
  letter-spacing: -1.1px;
  margin-bottom: -14px;
`;

const SloganContentSecond = styled.Text`
  font-family: ${NK700};
  font-size: 15px;
  letter-spacing: -0.17px;
  color: ${DARK_GRAY};
`;

const MentoApplyButtonContent = styled.Text`
  font-family: ${NK700};
  font-size: 16px;
`;

const Wrapper = styled.View`
  flex: 5;
  /* background-color: red; */
`;

const SloganView = styled.View`
  display: flex;
  height: 240px;
  padding-horizontal: 16px;
  background-color: ${PRIMARY_LIGHT2};
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 21px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SloganContentView = styled.View``;

const MentoApplyButtonView = styled.View`
  height: 40px;
`;

const MentoApplyButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
