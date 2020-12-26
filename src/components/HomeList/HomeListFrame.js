import React from 'react';
import styled from 'styled-components/native';
const PENGSU_IMAGE = require('../../pengsu.png');

const HomeListFrame = ({
  navigation,
  title,
  type,
  money,
  bojoung,
  roomType,
  floor,
  size,
  kuanri,
  sogae,
}) => {
  return (
    <Wrapper>
      <HomeImageContainer>
        <HomeImage source={PENGSU_IMAGE}></HomeImage>
      </HomeImageContainer>
      <HomeImageInformation>
        <HomeImageTitle>
          <TitleContent>{title}</TitleContent>
        </HomeImageTitle>
        <HomeImageMoney>
          <MoneyContent>
            {type} {bojoung}/{money}
          </MoneyContent>
        </HomeImageMoney>
        <HomeImageSummaryContent>
          <SummaryContent>
            {roomType} {floor} | {size} | 관리비 {kuanri}
          </SummaryContent>
        </HomeImageSummaryContent>
        <HomeImageSay>
          <SayContent>{sogae}</SayContent>
        </HomeImageSay>
      </HomeImageInformation>
      <PreTenantContent></PreTenantContent>
    </Wrapper>
  );
};

export default HomeListFrame;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: purple;
  height: 150px;
  padding: 12px;
  margin-bottom: 10px;
  justify-content: space-around;
`;

const HomeImageContainer = styled.View`
  flex: 1;
  background-color: gray;
`;

const HomeImage = styled.Image`
  aspect-ratio: 1.2;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const HomeImageInformation = styled.View`
  flex: 1;
  background-color: white;
`;
const HomeImageTitle = styled.View``;
const TitleContent = styled.Text`
  font-weight: 700;
  color: #616161;
`;

const HomeImageMoney = styled.View``;
const MoneyContent = styled.Text`
  font-size: 22px;
  font-weight: 700;
`;

const HomeImageSummaryContent = styled.View``;
const SummaryContent = styled.Text`
  font-weight: 700;
  color: #9e9e9e;
`;

const HomeImageSay = styled.View``;
const SayContent = styled.Text`
  color: #9e9e9e;
`;

const PreTenantContent = styled.View``;
