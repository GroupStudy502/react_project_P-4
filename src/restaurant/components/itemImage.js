import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
  height: 350px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  background: url('${({ image }) => image}') no-repeat center center;
  background-size: contain;
  background-color: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ItemImage = ({ images, onClick }) => {
  images = Array.isArray(images) ? images : [images];
  console.log(images);

  return (
    images.length > 0 && (
      <Wrapper className="item-images">
        {images.map(({ rstrImgUrl }) => (
          <ImageBox
            image={rstrImgUrl}
            key={rstrImgUrl}
            className="item-image"
            onClick={() => onClick(rstrImgUrl)}
          />
        ))}
      </Wrapper>
    )
  );
};

export default React.memo(ItemImage);
