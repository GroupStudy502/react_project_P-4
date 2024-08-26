import { Routes, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

// 회원 페이지
const Member = loadable(() => import('./routes/Member'));

// 마이 페이지
const Mypage = loadable(() => import('./routes/Mypage'));

// 리뷰 게시판 페이지
const Board = loadable(()=> import('./routes/Board'))

// 식당 페이지
const Restaurant = loadable(() => import('./routes/Restaurant'));

// 예약 페이지
const Reservation = loadable(() => import('./routes/Reservation'));

// 예약 내역 페이지
const ReservationList = loadable(() => import('./routes/ReservationList'));

// AI 페이지
const Ai = loadable(() => import('./routes/Ai'));

// 결제 처리 URL
const Payment = loadable(() => import('./routes/Payment'));

const routeUrlPaths = [
  'member',
  'mypage',
  'restaurant',
  'board',
  'reservation',
  'reservationlist',
  'ai',
  'payment',
];

const App = () => {
  const location = useLocation();
  return routeUrlPaths.includes(location.pathname.split('/')[1]) ? (
    <>
      <Member />
      <Mypage />
      <Restaurant />
      <Board />
      <Reservation />
      <ReservationList />
      <Ai />
      <Payment />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;
