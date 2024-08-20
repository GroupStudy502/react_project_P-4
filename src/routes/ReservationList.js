import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const MainLayout = loadable(() => import("../layouts/MainLayout"));
/* 에약 페이지 S */
const ReservationListPage = loadable(() => import("../reservationlist/pages/ReservationList"));
/* 예약 페이지 E */

const ReservationList = () => {
  return (
    <Routes>
      <Route path="/reservationlist" element={<MainLayout />}>
        <Route index element={<ReservationListPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(ReservationList);