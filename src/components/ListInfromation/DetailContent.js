import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const DetailContent = ({ name, info }) => {
  return (
    <Wrapper>
      <NameView>
        <NameContent>{name}</NameContent>
      </NameView>
      <View>
        <Content>{info}</Content>
      </View>
    </Wrapper>
  );
};

export default DetailContent;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
`;

const NameView = styled.View`
  font-weight: 700;
`;

const NameContent = styled.Text`
  width: 80px;
  font-size: 15px;
  font-weight: 700;
  color: #616161;
`;

const Content = styled.Text`
  width: 260px;
  font-size: 15px;
  font-weight: 700;
  color: #9e9e9e;
`;
