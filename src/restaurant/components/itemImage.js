import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Wrapper = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
  height: 350px;
  overflow: hidden;
  border: 1px solid #ccc; 
`;

const ImageBox = styled.div`
  background: url('${({ image }) => image}') no-repeat center center;
  background-size: contain;
  width: 100%;
  height: 100%;
  cursor: pointer;
  
`;

const ItemImage = ({ images, onClick }) => {
  useEffect(() => {
    console.log('Images:', images);
  }, [images]);

  images = Array.isArray(images) ? images : [images];

  return (
    images.length > 0 && (
      <Wrapper className="item-images">
       
          {images.map((img) => (
           
              <ImageBox
                image={img.rstrImgUrl}
                className="item-image"
                onClick={() => onClick(img.rstrImgUrl)}
              />
           
          ))}
      
      </Wrapper>
    )
  );
};

export default React.memo(ItemImage);
