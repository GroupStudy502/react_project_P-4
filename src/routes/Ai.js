import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const AiPage = loadable(() => import('../ai/pages/AiPage'));

const Ai = () => {
  return (
    <Routes>
      <Route path="/ai" element={<MainLayout />}>
        <Route index element={<AiPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Ai);
