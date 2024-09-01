import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import SlideBanner from '../../commons/components/SlideBanner';

const Wrapper = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
  min-height: 350px;
  overflow: hidden;
  border: 1px solid #ccc;
`;

const StyleSlideBanner = styled(SlideBanner)`
  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 22px);
    color: #ececec;
    opacity: 0.7;
  }
`;

const ItemImage = ({ images }) => {
  const items = images
    ? images.map(({ rstrImgUrl, rstrNm }) => ({
        image: rstrImgUrl,
        alt: rstrNm,
      }))
    : [];

  images = Array.isArray(images) ? images : [images];

  return (
    images.length > 0 && (
      <Wrapper className="item-images">
        <StyleSlideBanner
          items={items}
          options={{ navigation: true, loop: true, speed: 700 }}
        />
      </Wrapper>
    )
  );
};

export default React.memo(ItemImage);
