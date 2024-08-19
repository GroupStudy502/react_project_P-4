import React from 'react';
import Banner from '../components/Banner';
import RestaurantCategory from '../components/RestaurantCategory';


const CategoryContainer = () => {
  return (
    <>
      <Banner />
      <RestaurantCategory />
    </>
  );
};

export default React.memo(CategoryContainer);
