import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { TextStyle } from '../../util/TextStyle';

import { PRIMARY_NORMAL, LIGHT_GRAY, NK700, NK500 } from '../../util/Color';
import my from '../../../assets/my.png';
import Star from '../../util/Star';

const MentoBox = ({ score, name, comment }) => {
  return (
    <Wrapper style={styles.container}>
      <Profile>
        <ProfileImageView>
          <ProfileImage source={my} />
        </ProfileImageView>
        <MentoNameView>
          <MentoNameContent>{name}</MentoNameContent>
        </MentoNameView>
      </Profile>
      <CommentStarView>
        <CommentView>
          <CommentContent>{comment}</CommentContent>
        </CommentView>
        <StarView>
          <Star width={14} height={14} score={score} />
        </StarView>
      </CommentStarView>
    </Wrapper>
  );
};

export default MentoBox;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
});

const Wrapper = styled.View`
  display: flex;
  width: 150px;
  height: 130px;
  padding-left: 15px;
  padding-top: 17px;
  background-color: white;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 1px;
  border-radius: 10px;
  elevation: 2.3;
`;

const MentoNameView = styled.View``;

const MentoNameContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 12px;
`;

const Profile = styled.View`
  height: 24px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const ProfileImageView = styled.View`
  height: 24px;
  width: 24px;
  margin-right: 8px;
`;

const ProfileImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 40px;
`;

const CommentStarView = styled.View`
  height: 60px;
`;

const CommentView = styled.View`
  height: 50px;
  padding-left: 2px;
  margin-bottom: 10px;
`;

const CommentContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 12px;
`;

const StarView = styled.View`
  justify-content: center;
  align-items: flex-start;
`;
