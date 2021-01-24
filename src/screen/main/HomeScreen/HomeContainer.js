import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import HomePresenter from './HomePresenter';
import { mentoState } from '../../../states/MentoState';
import { mentoApi, homeApi } from '../../../api/index';
import { homeListState } from '../../../states/HomeListState';

const HomeContainer = ({ navigation }) => {
  const [mentoList, setMentoList] = useRecoilState(mentoState);
  const [homeList, setHomeList] = useRecoilState(homeListState);

  const goPage = (page) => navigation.navigate(page);

  const getMento = async () => {
    try {
      const result = await mentoApi.getMento();
      setMentoList(result);
    } catch (e) {
      console.error(e);
    }
  };

  const getHome = async () => {
    try {
      const result = await homeApi.getHome();
      setHomeList(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMento();
    getHome();
  }, []);

  return (
    <HomePresenter
      navigation={navigation}
      goPage={goPage}
      mentoList={mentoList}
      homeList={homeList}
    />
  );
};

export default HomeContainer;
