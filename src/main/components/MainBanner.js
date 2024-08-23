import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SwiperComponent from '../../Swiper/Swiper';

const MainBanner = ({}) => {
    const { t } = useTranslation();
    return (
        <SwiperComponent>배너</SwiperComponent>
    );
};
  
export default React.memo(MainBanner);