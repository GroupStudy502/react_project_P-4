import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabMenus from '../../commons/components/TabMenus';
import { apiWishlist as getRestaurantList } from '../../restaurant/apis/apiInfo';
import Loading from '../../commons/components/Loading';
import WishListItem from '../component/WishListItem';

const WishListContainer = () => {
  const [menus, setMenus] = useState([]);
  const { t } = useTranslation();
  const { tab } = useParams();
  const [items, setItems] = useState();
  const [pagination, setPagination] = useState();

  useEffect(() => {
    setMenus(() => [
      { name: t('식당'), link: '/mypage/wishlist/restaurant' },
      //{ name: t('게시글'), link: '/mypage/wishlist/board' },
    ]);

    let apiList = null;
    switch (tab) {
      case 'board':
        break;
      default:
        apiList = getRestaurantList;
        return;
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

  return (
    <>
      <TabMenus items={menus} />
      {items && items.length > 0 ? (
        <WishListItem items={items} pagination={pagination} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default React.memo(WishListContainer);
