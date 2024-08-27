import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import image from '../../images/banner/banner1.png';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png';
import banner3 from '../../images/banner/banner3.png';
//import SwiperComponent from '../../Swiper/Swiper';
import SlideBanner from '../../commons/components/SlideBanner';
import { Pagination } from 'react-bootstrap';
import { color } from '../../styles/color';

const BannerImage = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

const Wrapper = styled.div`
  div {
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

const options = {
  loop: true,
  speed: 1000,
  pagination: true,
  navigation: true,
};

const items = [
  { image: banner1, link: '/ai', alt: '배너' },
  { image: banner2, link: '/ai', alt: '배너2' },
  { image: banner3, link: '/ai', alt: '배너3' },
];

const StyleSlideBanner = styled(SlideBanner)`
  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #ececec;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background: ${color.jmt};
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 22px);
    color: #ececec;
    opacity: 0.7;
  }
`;

const MainBanner = ({}) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <StyleSlideBanner
        items={items}
        width={900}
        height={600}
        options={options}
      ></StyleSlideBanner>
    </Wrapper>
    /**
     * <BannerImage>
      <NavLink to={'/ai'}>
        <img src={image} alt="배너" />
      </NavLink>
    </BannerImage>
     */
    //<SwiperComponent>배너</SwiperComponent>
  );
};

export default React.memo(MainBanner);
