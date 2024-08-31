import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { apiList } from '../../reservation/apis/apiInfo';
import apiCancel from '../../reservation/apis/apiCancel';
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../commons/components/Pagination';
import Loading from '../../commons/components/Loading';
import { useTranslation } from 'react-i18next';

function getQueryString(searchParams) {
  const qs = {};
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const ReservationListContainer = () => {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const { orderNo } = useParams();

  const { t } = useTranslation();

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
  }, [search, orderNo]);

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

  // 예약 취소 처리
  const onCancel = useCallback(
    (orderNo) => {
      if (!window.confirm(t('정말_취소하겠습니까?'))) {
        return;
      }

      (async () => {
        try {
          const res = await apiCancel(orderNo);
          setItems((items) =>
            items.map((item) => (item.orderNo === orderNo ? res : item)),
          );
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [t],
  );

  // 로딩 처리
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ItemsBox items={items} onCancel={onCancel} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(ReservationListContainer);
