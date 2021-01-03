import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, StatusBar } from 'react-native';

import Title from '../util/Title';
import EnrollButton from '../util/EnrollButton';
import DivideLine from '../util/DivideLine';
import { PRIMARY_NOMAL, LIGHT_GRAY2 } from '../util/Color';

const TITLE_NAME = '집 내놓기';

const PutHomeScreen = ({ navigation }) => {
  const [home, setHome] = useState([]);

  const nextPage = (page) => navigation.push(page);

  return (
    <Wrapper>
      <Title name={TITLE_NAME} />
      <EnrollBox>
        <EnrollButton
          height="55px"
          name="1. 사진 등록"
          onPress={() => nextPage('EnrollPicture')}
        />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <EnrollButton
          height="55px"
          name="2. 주소 등록"
          onPress={() => nextPage('EnrollAddress')}
        />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
        <EnrollButton
          height="55px"
          name="3. 상세 정보 등록"
          onPress={() => nextPage('EnrollDetails')}
        />
        <DivideLine height="8px" color={LIGHT_GRAY2} />
      </EnrollBox>
      <PutHomeButtonBox>
        <PutHomeButton>
          <ButtonContent>집내놓기 완료</ButtonContent>
        </PutHomeButton>
      </PutHomeButtonBox>
    </Wrapper>
  );
};

export default PutHomeScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const EnrollBox = styled.View`
  flex: 8;
`;

const PutHomeButtonBox = styled.View`
  flex: 3;
  justify-content: flex-end;
`;

const PutHomeButton = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  align-items: center;
  padding-top: 10px;
  background-color: ${PRIMARY_NOMAL};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ButtonContent = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;
