import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';

const { dark, light, jmt } = color;

const MenuBox = styled.nav`
  background: ${light};

  div {
    display: flex;
    height: 50px;
    width: 1100px;
    margin: 0 auto;

    a {
      color: ${dark};
      line-height: 50px;
      padding: 0 50px;
      font-size: ${fontSize.extraBig};

      &.on {
        background: ${jmt};
        color: ${light};
      }
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div>
        <NavLink
          to="/restaurant/search"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('식당 검색')}
        </NavLink>
        <NavLink
          to="/restaurant/near"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('내 주변 식당 찾기')}
        </NavLink>
        <NavLink to="/ai" className={({ isActive }) => classNames({ on: isActive })}>
          {t('점메추AI')}
        </NavLink>
        <NavLink
          to="/reservationList"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('예약 내역')}
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
