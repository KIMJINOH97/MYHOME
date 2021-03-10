import React from 'react';
import OnboardingPresenter from './OnboardingPresenter';

const OnboardingContainer = ({ navigation, toggle }) => {
  const goPage = (page) => navigation.navigate(page);
  return (
    <>
      <OnboardingPresenter goPage={goPage} toggle={toggle} />
    </>
  );
};

export default OnboardingContainer;
