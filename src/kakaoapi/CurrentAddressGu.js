/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

const CurrentAddressGu = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          for (const r of result) {
            if (r.region_type === 'H') {
              setAddress(r.region_1depth_name + " " + r.region_2depth_name);
              break;
            }
          }
        }
      });
    });
  }, [address]);

  return address && <div>{address}</div>;
};

export default React.memo(CurrentAddressGu);
