import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/logo.png';
import UserInfoContext from '../member/modules/UserInfoContext';

const { black, jmt } = color;

const MenuBox = styled.nav`
  div {
    display: flex;
    height: 70px;
    width: 1400px;
    margin: 0 auto;

    a {
      color: ${black};
      line-height: 70px;
      font-size: ${fontSize.big};
      font-family: 'NanumSquareB';
      text-align: center;

      &.on {
        color: ${jmt};
      }

      img {
        width: 200px;
      }
    }

    a:not(.logo) {
      width: 0;
      flex-grow: 1;
    }
  }
`;

const MainMenu = () => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div>
        <NavLink to="/" className="logo">
          <img src={logo} alt={t('로고')} />
        </NavLink>
        <NavLink
          to="/restaurant/search"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('식당_검색')}
        </NavLink>
        <NavLink
          to="/restaurant/near"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('주변_식당')}
        </NavLink>
        <NavLink
          to="/ai"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('점메추_AI')}
        </NavLink>

        <a>
          {!isLogin ? (
            <Link to="/member/login">{t('나의_예약_내역')}</Link>
          ) : (
            <Link to="/reservation/list">{t('나의_예약_내역')}</Link>
          )}
        </a>

        <a>
          {!isLogin ? (
            <Link to="/member/login">{t('마이페이지')}</Link>
          ) : (
            <Link to="/mypage">{t('마이페이지')}</Link>
          )}
        </a>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
