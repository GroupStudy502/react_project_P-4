import React from 'react';

import main from '../component/main.scss';


const MypageMain = () => {
  return (
    <>

      <section className="profile-main"><h1>마이페이지</h1></section>

  
      <div className="profile"></div>
        
        <h1>회원 정보 수정</h1>

        
      

      <div className="sub">
        <h1>찜내역 - 목록 리스트 이동</h1>
        <h1>리뷰 작성- 게시판이동</h1>
      </div>
    </>
  );
};

export default React.memo(MypageMain);
