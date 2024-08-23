import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 식당 페이지 S */
const RestaurantList = loadable(() =>
  import('../restaurant/pages/RestaurantList'),
);
const RestaurantView = loadable(() =>
  import('../restaurant/pages/RestaurantView'),
);
/* 식당 페이지 E */

/* 검색 페이지 S */
const SearchList = loadable(() =>
  import('../find/pages/SearchList'),
);
const NearList = loadable(() =>
  import('../find/pages/NearList'),
);
/* 검색 페이지 E */

const Restaurant = () => {
  return (
    <Routes>
      <Route path="/restaurant" element={<MainLayout />}>
        <Route path="list" element={<RestaurantList />} /> 
        <Route path="info/:rstrId" element={<RestaurantView />} />
        <Route path="search" element={<SearchList />} />
        <Route path="near" element={<NearList />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Restaurant);
