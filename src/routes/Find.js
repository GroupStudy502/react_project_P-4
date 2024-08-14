import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const FindRestaurant = loadable(() => import('../main/pages/FindRestaurant'));

const Find = () => {
  return (
    <Routes>
      <Route path="/find" element={<MainLayout />}>
        <Route index element={<FindRestaurant />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Find);