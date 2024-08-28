import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/color';
import SlideBanner from '../../commons/components/SlideBanner';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png';
import banner3 from '../../images/banner/banner3.png';
import banner from '../../images/banner/banner.png';

import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  div {
    margin: 0 auto  20px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const options = {
  loop: true,
  speed: 1000,
  pagination: true,
  navigation: true,
};

const items = [
  { image: banner1, link: '/ai', alt: '배너1'},
  { image: banner2, link: '/ai', alt: '배너2'},
  { image: banner3, link: '/ai', alt: '배너3'},
]

const StyleSlideBanner = styled(SlideBanner)`
  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #ececec;
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active {
    background: ${color.jmt};
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 22px);
    color: #ececec;
    opacity: 0.8;
  }
`;

const MainBanner = ({}) => {
  return (
    <Wrapper>
      <NavLink to='/ai'>
        <img src={banner}/>
      </NavLink> 
      <StyleSlideBanner
        items={items}
        width={1920}
        height={606}
        options={options}
      />
    </Wrapper>
  );
};

export default React.memo(MainBanner);
