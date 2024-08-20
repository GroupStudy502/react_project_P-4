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

const ListContainer = () => {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState(() => getQueryString(searchParams));
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { items, pagination } = await apiList(search);

        setItems(items);
        setPagination(pagination);
        setLoading(false);
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

  /* 카카오 지도 S*/
  const markers = [
    {
      lat: 37.557756188912954,
      lng: 126.94062742683245,
      info: { content: '<h1>출력</h1>', removable: true },
    },
    {
      lat: 37.557287959390024,
      lng: 126.94120499658828,
      image:
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
      info: { content: '<h1>출력2</h1>', clickable: true }, // 클릭시 토글 형태로 인포윈도우 노출
    },
    { lat: 37.561184514897825, lng: 126.94069261563956 },
  ];
  
  const options = {
    currentLocation: true, // 현재 위치 기반
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    zoom: 4,
    marker: markers,
    markerImage:
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
  };
  /* 카카오 지도 E*/

  return (
    <>
      <SearchBox
        form={form}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
      <KakaoMap {...options} />
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(ListContainer);
