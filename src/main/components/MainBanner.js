import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import image from '../../images/banner/banner1.png';
//import SwiperComponent from '../../Swiper/Swiper';

const BannerImage = styled.div`
  display: flex;  
  align-items: center;
  max-width: 1000px;
  min-width: 800px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
`

const MainBanner = ({}) => {
    const { t } = useTranslation(); 
    return (
    <BannerImage>
        <NavLink to={"/ai"}>
            <img src={image} alt="배너" />
        </NavLink>
    </BannerImage>
        //<SwiperComponent>배너</SwiperComponent>
    );
};
  
export default React.memo(MainBanner);