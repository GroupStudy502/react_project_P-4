/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../../restaurant/apis/apiInfo';
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../commons/components/Pagination';
import Loading from '../../commons/components/Loading';
import KakaoMap from '../../kakaoapi/KakaoMap';
import marker from '../../images/marker.png';
import styled from 'styled-components';

const ItemsBoxWrapper = styled.div `
  margin: 20px auto;
`;

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const NearContainer = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const [center, setCenter] = useState([]); // 지도 중심 좌표
  const [locations, setLocations] = useState([]); // 마커 표기할 위도, 경도 정보

  /* 현재 위치 찾기 S */
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    navigator.geolocation.getCurrentPosition((pos) => {
      // 현재 위치 설정
      const { latitude, longitude } = pos.coords;
      setCenter({ lat: latitude, lng: longitude });

      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          for (const r of result) {
            if (r.region_type === 'H') {
              setSearch((search) => ({
                ...search,
                sido: r.region_1depth_name, // 시도
                sigungu: r.region_2depth_name, // 시군구
                dong: r.region_3depth_name, // 동
              }));
              break;
            }
          }
        }
      });
    });
  }, [setSearch, setCenter]);
  /* 현재 위치 찾기 E */

  useEffect(() => {
    if (!search?.dong) {
      return;
    }

    (async () => {
      try {
        setLoading(true);

        const { items, pagination } = await apiList(search);

        setItems(items);
        setPagination(pagination);
        setLoading(false);

        /* 마커 표기 좌표 가공 처리 S */
        if (!items || items?.length === 0) {
          return;
        }

        const _locations = items
          .filter((d) => d.rstrLa && d.rstrLo && d.rstrNm)
          .map((d) => ({
            lat: d.rstrLa,
            lng: d.rstrLo,
            info: {
              content: `<a href="/restaurant/info/${d.rstrId}" style="font-weight:bold">${d.rstrNm}</a>`,
              clickable: true,
              removable: true,
            }, // 인포윈도우
          }));

        setLocations(_locations);

        if (_locations.length > 0)
          setCenter({ lat: _locations[0].lat, lng: _locations[0].lng });
        /* 마커 표기 좌표 가공 처리 E */
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((page) => {
    setSearch((search) => ({ ...search, page }));
  }, []);

  // 로딩 처리
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {locations && locations.length > 0 && (
        <KakaoMap
          currentLocation={true}
          center={center}
          marker={locations}
          markerImage={marker}
          zoom={7}
        />
      )}
      <ItemsBoxWrapper>
        <ItemsBox items={items} />
        {items.length > 0 && (
          <Pagination onClick={onChangePage} pagination={pagination} />
        )}
      </ItemsBoxWrapper>
    </>
  );
};

export default React.memo(NearContainer);
