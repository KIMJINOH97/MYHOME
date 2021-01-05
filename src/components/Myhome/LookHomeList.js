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
  align-items: center;
  height: 15px;
`;

const HomeNameContent = styled.Text`
  font-family: ${NK500};
  font-size: 12px;
  color: ${MEDIUM_GRAY};
  margin-top: -8px;
`;

const MoneyView = styled.View`
  align-items: center;
  height: 16px;
`;

const MoneyContent = styled.Text`
  font-family: ${NK700};
  font-size: 14px;
  margin-top: -10px;
`;
