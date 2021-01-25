import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { presentMentoState } from '../../../../states/MentoState';
import { mentoApi } from '../../../../api/index';

import DetailMentoPresenter from './DetailMentoPresenter';

const DetailMentoContainer = ({ route, navigation }) => {
  const { reviews, name, introduction } = route.params;
  const [mento, setMento] = useRecoilState(presentMentoState);
  const goPage = (page) => navigation.navigate(page);

  const getData = async () => {
    try {
      const result = await mentoApi.getPresentMento(route.params.id);
      if (result) {
        // console.log('결과', result);
        setMento(result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <DetailMentoPresenter goPage={goPage} route={route} />;
};

export default DetailMentoContainer;
