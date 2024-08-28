import React from 'react';
import MainBanner from '../components/MainBanner';
import MainCategory from '../components/MainCategory';
import CategoryBanner from '../components/CategoryBanner';


const MainContainer = () => {
  return (
    <>
      <MainBanner />
      <CategoryBanner/>
      <MainCategory />
    </>
  );
};

export default React.memo(MainContainer);
