import React from 'react';
import styled from 'styled-components/native';
import { TextStyle } from '../../util/TextStyle';
import { NK500, DARK_GRAY, NK400, MEDIUM_GRAY } from '../../util/Color';

const CommentTitle = ({ name, comment }) => {
  return (
    <Wrapper>
      <Title>
        <Content>{name}</Content>
      </Title>
      <CommentView>
        <Comment>{comment}</Comment>
      </CommentView>
    </Wrapper>
  );
};

export default CommentTitle;

const Wrapper = styled.View`
  height: 40px;
  margin-bottom: 10px;
`;

const Title = styled.View``;

const Content = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 14px;
  color: ${DARK_GRAY};
  letter-spacing: -0.14px;
`;

const CommentView = styled.View`
  margin-top: 2px;
`;

const Comment = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -0.14px;
`;
