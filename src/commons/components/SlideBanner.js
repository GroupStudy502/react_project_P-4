import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled, { css } from 'styled-components';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
      overflow-y: hidden;

      * {
        max-height: ${height}px;
      }
    `}
  .banner {
    img {
      width: 100%;
      display: block;
    }
  }
`;

const SlideBanner = ({
  items,
  width,
  height,
  options,
  onChange,
  onSwiper,
  className,
}) => {
  options = options ?? {};
  const { spaceBetween, slidesPerView, loop, speed, pagination, navigation } =
    options;

  const SwiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: spaceBetween ?? 0,
    slidesPerView: slidesPerView ?? 1,
    loop: Boolean(loop),
    speed: speed ?? 500,
  };

  if (onChange) SwiperProps.onSlideChange = onChange;
  if (onSwiper) SwiperProps.onSwiper = onSwiper;
  if (navigation) SwiperProps.navigation = true;
  if (pagination) SwiperProps.pagination = { clickable: true };

  return (
    items &&
    items.length > 0 && (
      <Wrapper width={width} height={height} className={className}>
        <Swiper {...SwiperProps}>
          {items.map(({ image, link, alt }) => (
            <SwiperSlide key={image} className="banner">
              {link?.trim() ? (
                <Link to={link}>
                  <img src={image} alt={alt} />
                </Link>
              ) : (
                <img src={image} alt={alt} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    )
  );
};

export default React.memo(SlideBanner);
