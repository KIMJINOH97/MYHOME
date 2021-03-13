import React from 'react';
import styled from 'styled-components/native';

import { MEDIUM_GRAY, NK500, NK400 } from '../../util/Color';
import HOME_PICTURE from '../../../assets/HOME_PICTURE.png';
import { TextStyle } from '../../util/TextStyle';

const LookHome = ({ name, money, photo, room_type }) => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImageView>
          <ProfileImage source={photo ? { uri: photo } : HOME_PICTURE} />
        </ProfileImageView>
      </Profile>
      <HomeNameView>
        <HomeNameContent>{name}</HomeNameContent>
      </HomeNameView>
      <MoneyView>
        <MoneyContent>월세 {money}</MoneyContent>
      </MoneyView>
    </Wrapper>
  );
};

export default LookHome;

const Wrapper = styled.View`
  width: 110px;
  height: 150px;
  margin-top: 5px;
  margin-right: 10px;
  border-radius: 10px;
`;

const Profile = styled.View`
  height: 100px;
`;

const ProfileImageView = styled.View`
  height: 95px;
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
  font-family: ${NK400};
  font-size: 14px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -1px;
`;

const MoneyView = styled.View`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const MoneyContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  letter-spacing: -0.2px;
`;
