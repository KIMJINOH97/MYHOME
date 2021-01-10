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
import { TextStyle } from '../../util/TextStyle';
import TENANT from '../../../assets/TENANT.png';

const HomeListFrame = ({ item }) => {
  const {
    image,
    room_type,
    deposit,
    monthly_rent,
    floor,
    space,
    management_fee,
    introduction,
    comments,
  } = item;
  return (
    <Wrapper>
      <HomeImageContainer>
        <HomeImage
          source={require('../../../assets/HOME_PICTURE.png')}
        ></HomeImage>
      </HomeImageContainer>
      <HomeImageInformation>
        <HomeImageTitle>
          <TitleContent>신촌 신축 원룸</TitleContent>
        </HomeImageTitle>
        <HomeImageMoney>
          <MoneyContent>
            월세 {deposit}/{monthly_rent}
          </MoneyContent>
        </HomeImageMoney>
        <HomeImageSummaryContent>
          <SummaryContent>
            {room_type} {floor}층 | {space}평 | 관리비 {management_fee}만
          </SummaryContent>
        </HomeImageSummaryContent>
        <HomeImageSay>
          <SayContent>{introduction}</SayContent>
        </HomeImageSay>
        {comments ? (
          <PreTenantNumber>
            <PreTenantImageView>
              <PreTenantImage source={TENANT} />
            </PreTenantImageView>
            <PreTenantContentView>
              <PreTenantContent>
                전 세입자 후기 {comments.length}개
              </PreTenantContent>
            </PreTenantContentView>
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
  flex: 1.05;
  background-color: white;
  justify-content: space-between;
`;

const HomeImageTitle = styled.View``;

const TitleContent = styled(TextStyle)`
  font-family: ${NK500};
  letter-spacing: -0.48px;
  font-size: 14px;
  color: ${DARK_GRAY};
`;

const HomeImageMoney = styled.View``;

const MoneyContent = styled(TextStyle)`
  font-family: ${NK500};
  letter-spacing: -0.48px;
  font-size: 18px;
`;

const HomeImageSummaryContent = styled.View``;

const SummaryContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 15px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -0.45px;
`;

const HomeImageSay = styled.View``;

const SayContent = styled(TextStyle)`
  font-family: ${NK400};
  color: ${LIGHT_GRAY};
  font-size: 14px;
  letter-spacing: -0.14px;
`;

const PreTenantNumber = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PreTenantImageView = styled.View`
  margin-right: 10px;
`;

const PreTenantImage = styled.Image`
  height: 16px;
  width: 16px;
`;

const PreTenantContentView = styled.View``;
const PreTenantContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 12px;
  color: ${PRIMARY_NORMAL};
`;
