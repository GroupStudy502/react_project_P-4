import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { addWish, removeWish } from '../libs/wish/apiWish';
import UserInfoContext from '../../member/modules/UserInfoContext';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import fontSize from '../../styles/fontSize';

const {small,normal} = fontSize

const AlertMessage = styled.div`
  font-size: ${normal};
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ececec;
  color: black;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out, visibility 0s ${props => props.show ? '0s' : '0.3s'};
  
  
`;

const WishButton = ({ IconOn, IconOff, seq, type }) => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const On = IconOn ?? FaBookmark;
  const Off = IconOff ?? FaRegBookmark;

  const navigate = useNavigate();
  const location = useLocation();

  const { 
    states: { isLogin },
  } = useContext(UserInfoContext);

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
          if (status) {
            setShowAlert(true);
            setTimeout(() => {
            setShowAlert(false);
          }, 1000); // Show for 2 seconds before fading out
        }
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [seq, type, navigate, location.pathname, isLogin],
  );

  return (
    <>
      {toggle ? (
        <On onClick={() => onClick(false)} />
      ) : (
        <Off onClick={() => onClick(true)} />
      )}
        <AlertMessage show={showAlert}>{t('저장되었습니다.')}</AlertMessage>
    </>
  );
};

export default React.memo(WishButton);
