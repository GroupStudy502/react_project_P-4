import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabMenus from '../../commons/components/TabMenus';
import { apiWishlist as getRestaurantList } from '../../restaurant/apis/apiInfo';
import Loading from '../../commons/components/Loading';
import WishListItem from '../component/WishListItem';
import Pagination from '../../commons/components/Pagination';

const WishListContainer = () => {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState({
    page: 1,
  });
  const { t } = useTranslation();
  const { tab } = useParams();
  const [items, setItems] = useState();
  const [pagination, setPagination] = useState();

  useEffect(() => {
    setMenus(() => [
      { name: t('식당'), link: '/mypage/wishlist/restaurant' },
      { name: t('게시글'), link: '/mypage/wishlist/board' },
    ]);

    let apiList = null;
    switch (tab) {
      case 'board':
        break;
      default:
        apiList = getRestaurantList;
    }
    if (!apiList) {
      return;
    }

    (async () => {
      try {
        const res = await apiList();
        setItems(res.items);
        setPagination(res.pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [t, tab]);

  const onPageClick = useCallback((page) => {
    setSearch((search) => ({ ...search, page }));
  }, []);

  return (
    <>
      <TabMenus items={menus} />
      {items && items.length > 0 ? (
        <>
          <WishListItem items={items} />
          <Pagination pagination={pagination} onClick={onPageClick} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default React.memo(WishListContainer);
