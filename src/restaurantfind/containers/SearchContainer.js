import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../../restaurant/apis/apiInfo';
import ItemsBox from '../components/ItemsBox';
import SearchBox from '../components/SearchBox';
import Pagination from '../../commons/components/Pagination';
import Loading from '../../commons/components/Loading';
import KakaoMap from '../../kakaoapi/KakaoMap';
import marker from '../../images/marker.png';

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const [center, setCenter] = useState([]); // 지도 중심 좌표(현재 위치)
  const [locations, setLocations] = useState([]); // 마커 표기할 위도, 경도 정보

  useEffect(() => {
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
              content: d.rstrNm,
              clickable: true,
              removable: true
            }, // 인포윈도우
          }));
        setLocations(_locations);
        /* 마커 표기 좌표 가공 처리 E */
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  /* 검색 관련 함수 */
  const onChangeSearch = useCallback((e) => {
    setSearch((search) => ({ ...search, [e.target.name]: [e.target.value] }));
  }, []);

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();
    setSearch((search) => ({ ...search, page: 1 }));
  }, []);

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
      <SearchBox
        search={search}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
      {locations && locations.length > 0 && (
        <KakaoMap
          currentLocation={true}
          center={center}
          marker={locations}
          markerImage={marker}
          zoom={8}
        />
      )}
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(SearchContainer);
