import React, { useContext, useCallback } from 'react';
import cookies from 'react-cookies';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import fontSize from '../styles/fontSize';
import { color } from '../styles/color';
import logo from '../images/logo.png';
import MainMenu from './MainMenu';

import UserInfoContext from '../member/modules/UserInfoContext';
import { SmallButton } from '../commons/components/Buttons';

const { jmt } = color;

const HeaderBox = styled.header`
  .site-top {
    background: #f8f8f8;
    border-bottom: 1px solid #d5d5d5;
    height: 50px;

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 34px;
        margin-left: 10px;
        font-size: ${fontSize.normal};

        &.on {
          color: ${jmt};
        }
      }
    }
  }

  .logo {
    div {
      width: 360px;
      height: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = useContext(UserInfoContext);

  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  // 관리자 URL
  const adminUrl =
    process.env.REACT_APP_ADMIN_URL + '?token=' + cookies.load('token');

  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          {isLogin ? (
            <>
              {/* 로그인 상태 */}
              <span>
                {userInfo?.userName}({userInfo?.email}){t('님 로그인')}
              </span>
              {isAdmin && (
                <a href={adminUrl} target="_blank">
                  {t('사이트 관리')}
                </a>
              )}
              <SmallButton color="secondary" width={150} onClick={onLogout}>
                {t('로그아웃')}
              </SmallButton>
            </>
          ) : (
            <>
              {/* 미로그인 상태 */}
              <NavLink
                to="/member/join"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('회원가입')}
              </NavLink>
              <NavLink
                to="/member/login"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('로그인')}
              </NavLink>
            </>
          )}
        </div>
      </section>
      <section className="logo">
        <div>
          <Link to="/">
            <img src={logo} alt={t('로고')} />
          </Link>
        </div>
      </section>
      <MainMenu />
    </HeaderBox>
  );
};

export default React.memo(Header);
