import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import MypageList from '../component/MypageList';
import MypageContainer from '../containers/MypageContainer';




const Main = () => {
  return (
    <MemberOnlyContainer>
     <h1>마이페이지</h1>
    
      <MypageList />
    </MemberOnlyContainer>
  );
};

export default React.memo(Main);