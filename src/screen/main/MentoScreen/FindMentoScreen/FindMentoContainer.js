import React from 'react';

import FindMentoPresenter from './FindMentoPresenter';

const FindMentoContainer = ({ navigation }) => {
  const goPage = (page, item) => navigation.navigate(page, item);
  return <FindMentoPresenter goPage={goPage} />;
};

export default FindMentoContainer;
