import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));
const ReservationPage = loadable(() => 
  import("../reservation/pages/Reservation"),
);

const Reservation = () => {
  return (
    <Routes>
      <Route path="/reservation" element={<MainLayout />}>
        <Route path=":rstrId" element={<ReservationPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Reservation);