import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { PRIMARY_NORMAL, LIGHT_GRAY, NK700, NK500 } from '../../util/Color';
import my from '../../../assets/my.png';

const MentoBox = ({ name, comment }) => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImageView>
          <ProfileImage source={my} />
        </ProfileImageView>
        <View>
          <Text style={styles.mentoName}>{name}</Text>
        </View>
      </Profile>
      <CommentView>
        <Text style={styles.comment}>{comment}</Text>
      </CommentView>
      <Star></Star>
    </Wrapper>
  );
};

export default MentoBox;

const Wrapper = styled.View`
  width: 150px;
  height: 120px;
  padding-left: 15px;
  padding-top: 17px;
  background-color: white;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 1px;
  border-radius: 10px;
  elevation: 2.3;
`;

const styles = StyleSheet.create({
  mentoName: {
    fontFamily: NK700,
    fontSize: 12,
  },
  comment: {
    fontFamily: NK700,
    fontSize: 12,
  },
});

const Profile = styled.View`
  height: 24px;
  flex-direction: row;
  align-items: center;
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

const CommentView = styled.View`
  height: 35px;
`;

const Star = styled.View`
  height: 10px;
`;
