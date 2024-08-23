import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 식당 페이지 S */
const RestaurantView = loadable(() =>
  import('../restaurant/pages/RestaurantView'),
);
/* 식당 페이지 E */

/* 식당 찾기 페이지 S */
const RestaurantSearchList = loadable(() =>
  import('../restaurant/pages/RestaurantSearchList'),
);
const RestaurantNearList = loadable(() =>
  import('../restaurant/pages/RestaurantNearList'),
);
/* 식당 찾기 페이지 E */

const Restaurant = () => {
  return (
    <Routes>
      <Route path="/restaurant" element={<MainLayout />}>
        <Route path="search" element={<RestaurantSearchList />} />
        <Route path="near" element={<RestaurantNearList />} />
        <Route path="info/:rstrId" element={<RestaurantView />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Restaurant);
