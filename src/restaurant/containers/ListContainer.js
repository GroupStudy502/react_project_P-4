import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../../restaurant/apis/apiInfo';
import ItemsBox from '../../restaurantfind/components/ItemsBox';
import Pagination from '../../commons/components/Pagination';
import Loading from '../../commons/components/Loading';

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
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(ListContainer);
