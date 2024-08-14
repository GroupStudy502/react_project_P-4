import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import { load } from 'react-cookies';
import { Component } from 'react';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

/* 회원 페이지 S */
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));
/* 회원 페이지 E */

/* 마이페이지 S */
const MypageMain = loadable(() => import('./mypage/pages/MypageMain'));
/* 마이페이지 E */

/* 식당 페이지 S */
const RestaurantInfo = loadable(() => import('./main/pages/RestaurantInfo'));
const RestaurantList = loadable(() => import('./main/pages/RestaurantList'));
/* 식당 페이지 E */

/* 찜한 내역 S */
const JjimList = loadable(() => import('./mypage/pages/JjimList'));
/* 찜한 내역 E */

// 매장 상세 페이지
const DetailsMain = loadable(() =>
  import('./restaurantdetails/pages/DetailsMain'),
);

/* 식당 페이지 B */
const RestaurantList2 = loadable(() => import("./restaurant/pages/RestaurantList2"));
const RestaurantView = loadable(() => import("./restaurant/pages/RestaurantList2"));
/* 식당 페이지 D */


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}> 
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        {/* 회원 페이지 S */}
        <Route path="member">
          <Route path="join" element={<Join />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* 회원 페이지 E */}
        {/* 마이페이지 S */}
        <Route path="mypage">
          <Route index element={<MypageMain />} />
        </Route>
        <Route path="JjimList">
          <Route index element={<JjimList />} />
        </Route>
        {/* 마이페이지 E */}
        {/* 식당 페이지 S */}
        <Route path="restaurant">
          <Route path="info" element={<RestaurantInfo />} />
          <Route path="list" element={<RestaurantList />} />
          <Route path="details/:id" element={<DetailsMain />} />
        </Route>
        <Route path='/restaurant2' element={<MainLayout/>}>
          <Route index element={<RestaurantList2 />} />
          <Route path=":id" element={<RestaurantView />} />
         </Route>
        {/* 식당 페이지 E */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;
