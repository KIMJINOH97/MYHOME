import React from 'react';
import styled from 'styled-components/native';

import HOME_LOGO from '../../../assets/HOME_LOGO.png';
import HOME_NAME from '../../../assets/HOME_NAME.png';

const MyhomeTitle = ({}) => {
  return (
    <Wrapper>
      <TitleContainer>
        <MyhomeIcon>
          <MyhomeLogo source={HOME_LOGO} />
        </MyhomeIcon>
        <TitleIcon>
          <TitleContent source={HOME_NAME} />
        </TitleIcon>
      </TitleContainer>
    </Wrapper>
  );
};

export default MyhomeTitle;

const Wrapper = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const MyhomeIcon = styled.View`
  width: 43px;
  height: 37px;
  align-items: flex-end;
`;

const MyhomeLogo = styled.Image`
  width: 100%;
  height: 100%;
`;

const TitleIcon = styled.View`
  margin-left: 16px;
`;

const TitleContent = styled.Image`
  height: 26px;
  width: 73px;
`;
