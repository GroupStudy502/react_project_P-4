import { createContext, useState, useEffect, useContext } from 'react';
import { getWishList } from '../libs/wish/apiWish';
import UserInfoContext from '../../member/modules/UserInfoContext';


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

export const WishListProvider = ({ children }) => {
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

  const { states: {isLogin }} = useContext(UserInfoContext);

  useEffect(() => {
    if (!isLogin) {
        return;
    }

    (async () => {
      try {
        const boardWish = await getWishList('BOARD');
        const restaurantWish = await getWishList('RESTAURANT');

        setBoardWish(boardWish);
        setRestaurantWish(restaurantWish);

      } catch (err) {
        console.error(err);
      }
    })();
  }, [isLogin]);

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export const { Consumer: WishListConsumer } = WishListContext;

export default WishListContext;
