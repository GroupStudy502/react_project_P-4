import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
//import ReservationView from '../reservation/pages/ReservationView';

const MainLayout = loadable(() => import('../layouts/MainLayout'));


const ReservationPage = loadable(() => 
  import("../reservation/pages/Reservation"),
);

// 예약 조회 페이지
const ReservationList = loadable(() => 
  import("../reservation/pages/ReservationList"),
);

const ReservationInfoView = loadable(() =>
  import('../reservation/pages/ReservationView'),
);

const Reservation = () => {
  return (
    <Routes>
      <Route path="/reservation" element={<MainLayout />}>
        <Route path=":rstrId" element={<ReservationPage />} />
        <Route path="list" element={<ReservationList />} /> 
        <Route path="info/:orderNo" element={<ReservationInfoView />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Reservation);