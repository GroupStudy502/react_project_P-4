import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/color';
import SlideBanner from '../../commons/components/SlideBanner';
import category1 from '../../images/category/1.png';
import category2 from '../../images/category/2.png';
import category3 from '../../images/category/3.png';
import category4 from '../../images/category/4.png';
import category5 from '../../images/category/5.png';
import category6 from '../../images/category/6.png';
import category7 from '../../images/category/7.png';
import category8 from '../../images/category/8.png';
import category9 from '../../images/category/9.png';
import category10 from '../../images/category/10.png';
import category11 from '../../images/category/11.png';
import category12 from '../../images/category/12.png';
import category13 from '../../images/category/13.png';
import category14 from '../../images/category/14.png';
import category15 from '../../images/category/15.png';

const Wrapper = styled.div`
  div {
    margin: 0 auto 20px;
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
  slidesPerView: 5,
  spaceBetween: 20,
};

const items = [
  { image: category1, link: '/restaurant/list?dbsnsStatmBzcndNm=한식', alt: '카테고리1' },
  { image: category2, link: '/restaurant/list?dbsnsStatmBzcndNm=중국식', alt: '카테고리2' },
  { image: category3, link: '/restaurant/list?dbsnsStatmBzcndNm=일식', alt: '카테고리3' },
  { image: category4, link: '/restaurant/list?dbsnsStatmBzcndNm=분식', alt: '카테고리4' },
  { image: category5, link: '/restaurant/list?dbsnsStatmBzcndNm=경양식', alt: '카테고리5' },
  { image: category6, link: '/restaurant/list?dbsnsStatmBzcndNm=패밀리레스토랑', alt: '카테고리6' },
  { image: category7, link: '/restaurant/list?dbsnsStatmBzcndNm=패스트푸드', alt: '카테고리7' },
  { image: category8, link: '/restaurant/list?dbsnsStatmBzcndNm=호프/통닭', alt: '카테고리8' },
  { image: category9, link: '/restaurant/list?dbsnsStatmBzcndNm=식육(숯불구이)', alt: '카테고리9' },
  { image: category10, link: '/restaurant/list?dbsnsStatmBzcndNm=회집', alt: '카테고리10' },
  { image: category11, link: '/restaurant/list?dbsnsStatmBzcndNm=탕류(보신용)', alt: '카테고리11' },
  { image: category12, link: '/restaurant/list?dbsnsStatmBzcndNm=냉면집', alt: '카테고리12' },
  { image: category13, link: '/restaurant/list?dbsnsStatmBzcndNm=외국음식전문점(인도,태국등)', alt: '카테고리13' },
  { image: category14, link: '/restaurant/list?dbsnsStatmBzcndNm=커피숍', alt: '카테고리14' },
  { image: category15, link: '/restaurant/list?dbsnsStatmBzcndNm=제과점영업', alt: '카테고리15' },
];

const StyleSlideBanner = styled(SlideBanner)`
  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #000;
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    background: ${color.jmt};
    opacity: 0.8;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 60px);
    color: #ececec;
    opacity: 0.8;
  }
`;

const CategoryBanner = ({}) => {
  return (
    <Wrapper>
      <StyleSlideBanner
        items={items}
        width={1400}
        height={370}
        options={options}
      />
    </Wrapper>
  );
};

export default React.memo(CategoryBanner);
