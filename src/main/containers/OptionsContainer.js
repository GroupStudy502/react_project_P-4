import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../../restaurant/apis/apiInfo';
import OptionsItemsBox from '../components/OptionsItemsBox';
import OptionsBox from '../components/OptionsBox';

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


  useEffect(() => {
    (async () => {
      try {
        const { items } = await apiList(search);

        setItems(items);

      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  return (
    <>
      <OptionsItemsBox items={items} />
    </>
  );
};

export default React.memo(ListContainer);
