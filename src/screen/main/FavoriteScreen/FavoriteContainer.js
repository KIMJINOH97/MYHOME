import React from 'react';

import FavoritePresenter from './FavoritePresenter';
import { useRecoilState } from 'recoil';
import { userState } from '../../../states/LoginState';
import { favoriteHomeState } from '../../../states/HomeListState';

const FavoriteScreenContainer = ({ navigation }) => {
  const [user] = useRecoilState(userState);
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteHomeState);
  const goPage = (page, item) => navigation.navigate(page, item);

  return (
    <FavoritePresenter
      user={user}
      favoriteList={favoriteList}
      goPage={goPage}
    />
  );
};

export default FavoriteScreenContainer;
