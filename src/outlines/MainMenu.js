import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/logo.png';

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
        <NavLink
          to="/reservationList"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('예약_내역')}
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('마이페이지')}
        </NavLink>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
