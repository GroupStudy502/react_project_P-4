import { Children, createContext, useState, useEffect } from 'react';
import { getWishList } from '../libs/wish/apiWish';

const WishListContext = createContext({
  states: {
    boardWish: [],
    restaurantWish: [],
  },
  actions: {
    setBoardWish: null,
    setRestaurantWish: null,
  },
});

export const WishListProvider = ({ Children }) => {
  const [boardWish, setBoardWish] = useState([]);
  const [restaurantWish, setRestaurantWish] = useState([]);
  const value = {
    states: {
      boardWish,
      restaurantWish,
    },
    actions: {
      setBoardWish,
      setRestaurantWish,
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const boardWish = await getWishList('BOARD');
        const restaurantWish = await getWishList('RESTAURANt');

        setBoardWish(boardWish);
        setRestaurantWish(restaurantWish);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <WishListContext.Provider value={value}>
      {Children}
    </WishListContext.Provider>
  );
};

export const { Consumer: WishListConsumer } = WishListContext;

export default WishListContext;
