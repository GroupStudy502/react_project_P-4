import React, { useState, useEffect, useCallback, useContext } from 'react';
import { addWish, removeWish } from '../libs/wish/apiWish';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import UserInfoContext from '../../member/modules/UserInfoContext';
import WishListContext from '../contexts/WishListContext';

const WishButton = ({ IconOn, IconOff, status, seq, type }) => {
  const [toggle, setToggle] = useState(false);
  const On = IconOn ?? FaBookmark;
  const Off = IconOff ?? FaRegBookmark;

  const navigate = useNavigate();
  const location = useLocation();
  

  const {states: { isLogin }} = useContext(UserInfoContext);

  const { states } = useContext(WishListContext);

  const wishListKey = `${type.toLowerCase()}Wish`;
  const wishList = states[wishListKey];

  useEffect(() => {
    setToggle(wishList.includes(seq));
  }, [wishList, seq]);

  const onClick = useCallback(
    (status) => {
        if (!isLogin) {
            navigate(`/member/login?redirectUrl=${location.pathname}`);
            return;
        }

      const requestWish = status ? addWish : removeWish;

      (async () => {
        try {
          await requestWish(seq, type);
          setToggle(status);
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [seq, type, navigate, location.pathname, isLogin],
  );

  return toggle ? (
    <On onClick={() => onClick(false)} />
  ) : (
    <Off onClick={() => onClick(true)} />
  );
};

export default React.memo(WishButton);
