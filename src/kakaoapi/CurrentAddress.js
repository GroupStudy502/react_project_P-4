/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fontSize from '../styles/fontSize';
import { FaLocationDot } from "react-icons/fa6";

const CurrentAddressWrapper = styled.div`
  font-family: "NanumSquareB";
  font-size: ${fontSize.medium};
  margin-bottom: 20px;
`;

const CurrentAddress = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          for (const r of result) {
            if (r.region_type === 'H') {
              setAddress(r.address_name);
              break;
            }
          }
        }
      });
    });
  }, [address]);

  return address && (
    <CurrentAddressWrapper>
      <FaLocationDot />
      {address}
    </CurrentAddressWrapper>
  );
};

export default React.memo(CurrentAddress);
