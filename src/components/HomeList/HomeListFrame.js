import React from 'react';
import styled from 'styled-components/native';

import {
  DARK_GRAY,
  LIGHT_GRAY,
  LIGHT_GRAY2,
  MEDIUM_GRAY,
  NK400,
  NK500,
  NK700,
  PRIMARY_NORMAL,
} from '../../util/Color.js';
import TENANT from '../../../assets/TENANT.png';

const HomeListFrame = ({
  navigation,
  title,
  image,
  pretenant,
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
        <HomeImage source={image}></HomeImage>
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
        {pretenant ? (
          <PreTenantNumber>
            <PreTenantImageView>
              <PreTenantImage source={TENANT} />
            </PreTenantImageView>
            <PreTenantContent>
              전 세입자 후기 {pretenant.length}개
            </PreTenantContent>
          </PreTenantNumber>
        ) : (
          <></>
        )}
      </HomeImageInformation>
    </Wrapper>
  );
};

export default HomeListFrame;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  /* background-color: purple; */
  height: 150px;
  padding-left: 16px;
  padding-vertical: 10px;
  margin-bottom: 4px;
  justify-content: space-around;
  border-bottom-color: ${LIGHT_GRAY2};
  border-bottom-width: 1px;
`;

const HomeImageContainer = styled.View`
  flex: 1;
  /* background-color: gray; */
`;

const HomeImage = styled.Image`
  border-radius: 10px;
  height: 130px;
  width: 150px;
`;

const HomeImageInformation = styled.View`
  flex: 1;
  background-color: white;
`;

const HomeImageTitle = styled.View``;

const TitleContent = styled.Text`
  font-family: ${NK500};
  letter-spacing: -0.48px;
  font-size: 14px;
  margin-top: -10px;
  color: ${DARK_GRAY};
`;

const HomeImageMoney = styled.View``;

const MoneyContent = styled.Text`
  font-family: ${NK500};
  letter-spacing: -0.48px;
  font-size: 18px;
  margin-top: -20px;
`;

const HomeImageSummaryContent = styled.View``;

const SummaryContent = styled.Text`
  font-family: ${NK700};
  font-size: 15px;
  margin-top: -15px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -0.45px;
`;

const HomeImageSay = styled.View``;

const SayContent = styled.Text`
  font-family: ${NK400};
  color: ${LIGHT_GRAY};
  font-size: 14px;
  margin-top: -22px;
  letter-spacing: -0.14px;
`;

const PreTenantNumber = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -8px;
`;

const PreTenantImageView = styled.View`
  margin-right: 10px;
`;

const PreTenantImage = styled.Image`
  height: 16px;
  width: 16px;
`;

const PreTenantContent = styled.Text`
  font-family: ${NK500};
  font-size: 12px;
  color: ${PRIMARY_NORMAL};
`;
