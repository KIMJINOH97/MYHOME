import React from 'react';
import styled from 'styled-components/native';

import {
  PRIMARY_NORMAL,
  MEDIUM_GRAY,
  NK700,
  NK500,
  NK100,
} from '../../util/Color';
import HOME_PICTURE from '../../../assets/HOME_PICTURE.png';
import { TextStyle } from '../../util/TextStyle';

const LookHome = ({ name, money }) => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImageView>
          <ProfileImage source={HOME_PICTURE} />
        </ProfileImageView>
      </Profile>
      <HomeNameView>
        <HomeNameContent>{name}</HomeNameContent>
      </HomeNameView>
      <MoneyView>
        <MoneyContent>{money}</MoneyContent>
      </MoneyView>
    </Wrapper>
  );
};

export default LookHome;

const Wrapper = styled.View`
  width: 110px;
  height: 120px;
  margin-top: 5px;
  margin-right: 10px;
  border-radius: 10px;
`;

const Profile = styled.View`
  height: 90px;
`;

const ProfileImageView = styled.View`
  height: 90px;
  width: 110px;
  margin-right: 8px;
`;

const ProfileImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

const HomeNameView = styled.View`
  display: flex;
  height: 12px;
  align-items: center;
`;

const HomeNameContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 12px;
  color: ${MEDIUM_GRAY};
`;

const MoneyView = styled.View`
  display: flex;
  align-items: center;
`;

const MoneyContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
`;
