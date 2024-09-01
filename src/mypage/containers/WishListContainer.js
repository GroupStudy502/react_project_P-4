import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apiWishlist } from '../../restaurant/apis/apiInfo';
import Loading from '../../commons/components/Loading';
import ItemsBox from '../../restaurant/components/ItemsBox';
import Pagination from '../../commons/components/Pagination';

const WishListContainer = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ?? 1);
  const { t } = useTranslation();
  const { tab } = useParams();
  const [items, setItems] = useState();
  const [pagination, setPagination] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await apiWishlist(page);
        setItems(res.items);
        setPagination(res.pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [t, tab, page]);

  const onPageClick = useCallback((page) => setPage(page), []);

  return (
    <>
      {items && items.length > 0 ? (
        <>
          <ItemsBox items={items} />
          <Pagination pagination={pagination} onClick={onPageClick} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default React.memo(WishListContainer);