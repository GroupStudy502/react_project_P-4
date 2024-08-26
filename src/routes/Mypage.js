import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MypageLayout = loadable(() => import('../layouts/MypageLayout'));

const MainPage = loadable(() => import('../mypage/pages/Main')); // 마이페이지 메인
const InfoPage = loadable(() => import('../mypage/pages/Info')); // 회원정보 수정
const ReservationPage = loadable(() => import('../mypage/pages/Reservation')); // 예약관리
const BoardPage = loadable(() => import('../mypage/pages/Board')); // 리뷰게시판
const WishRestaurantPage =  loadable(()=> import('../mypage/pages/WishRestaurant')); //찜한 식당목록 


const Mypage = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MypageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="info" element={<InfoPage />} /> 
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="freetalk" element={<BoardPage />} />
        <Route path="restaurant" element={<WishRestaurantPage/>} />
      </Route>
    </Routes>
  );
};

export default React.memo(Mypage);
