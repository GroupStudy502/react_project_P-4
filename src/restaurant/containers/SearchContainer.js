import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../apis/apiInfo';
import ItemsBox from '../components/ItemsBox';
import SearchBox from '../components/SearchBox';
import Pagination from '../../commons/components/Pagination';
import Loading from '../../commons/components/Loading';
import KakaoMap from '../../kakaoapi/KakaoMap';

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

  const [form, setForm] = useState(() => getQueryString(searchParams));
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const [locations, setLocations] = useState([]); // 검색된 위치들의 위도, 경도를 저장하는 배열 -> 마커 표기할 위도, 경도 정보

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
          .filter((d) => d.rstrLa && d.rstrLo)
          .map((d) => ({
            lat: d.rstrLa,
            lng: d.rstrLo,
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
    setForm((form) => ({ ...form, [e.target.name]: [e.target.value] }));
  }, []);

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch({ ...form, page: 1 });
    },
    [form],
  );

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

  // 로딩 처리
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {locations && locations.length > 0 && (
        <KakaoMap marker={locations} zoom={8} />
      )}
    </>
  );
};

export default React.memo(SearchContainer);
