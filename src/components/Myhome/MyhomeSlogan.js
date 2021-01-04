import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import { PRIMARY_LIGHT2, DARK_GRAY } from '../../util/Color';

const MyhomeSlogan = ({ navigation }) => {
  const nextPage = (page) => navigation.push(page);
  return (
    <Wrapper>
      <SloganView>
        <SloganContentView>
          <SloganContent>
            멘토와 함께라면{'\n'}직거래도 무섭지 않아
          </SloganContent>
          <SubContent>
            매물 찾기부터 계약까지{'\n'}A to Z 도우미 서비스.
          </SubContent>
        </SloganContentView>
        <MentoApplyButtonView>
          <MentoApplyButton onPress={() => nextPage('ApplyMento')}>
            <MentoAppleyButtonContent>멘토신청하기</MentoAppleyButtonContent>
          </MentoApplyButton>
        </MentoApplyButtonView>
      </SloganView>
    </Wrapper>
  );
};

export default MyhomeSlogan;

const Wrapper = styled.View`
  flex: 5;
  /* background-color: red; */
`;

const SloganView = styled.View`
  height: 240px;
  padding-horizontal: 16px;
  background-color: ${PRIMARY_LIGHT2};
  border-radius: 6px;
  padding-top: 27px;
  padding-bottom: 21px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SloganContentView = styled.View``;

const SloganContent = styled.Text`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -1.1px;
  margin-bottom: 20px;
`;

const SubContent = styled.Text`
  color: ${DARK_GRAY};
  font-size: 16px;
  font-weight: 700;
`;

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

const MentoAppleyButtonContent = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
