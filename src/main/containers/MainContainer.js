import React from 'react';
import styled from 'styled-components';
import MainBanner from '../components/MainBanner';
import CategoryBanner from '../components/CategoryBanner';

const Title = styled.div`
  width: 1400px;
  margin: 0 auto 20px;
  
  div{
    font-size: 2.25rem;
    font-family: "NanumSquareEB";
  }
`

const MainContainer = () => {
  return (
    <>
      <MainBanner />
      <Title><div>어떤 메뉴 찾고 계세요?</div></Title>
      <CategoryBanner />
    </>
  );
};

export default React.memo(MainContainer);
