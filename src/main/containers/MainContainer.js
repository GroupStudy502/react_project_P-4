import React from 'react';
import MainBanner from '../components/MainBanner';
import MainCategory from '../components/MainCategory';


const MainContainer = () => {
  return (
    <>
      <MainBanner />
      <MainCategory />
    </>
  );
};

export default React.memo(MainContainer);
