import React, { useContext, useCallback } from 'react';
import cookies from 'react-cookies';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import fontSize from '../styles/fontSize';
import { color } from '../styles/color';
import MainMenu from './MainMenu';
import topbanner from '../images/banner/topbanner.png';

import UserInfoContext from '../member/modules/UserInfoContext';
import { SmallButton } from '../commons/components/Buttons';

const { jmt } = color;

const HeaderBox = styled.header`
  .top-banner {
    position: relative;
    text-align: center;
    overflow: hidden;
    height: 50px;
  }

  .site-top {
    border-bottom: 1px solid #d5d5d5;
    height: 50px;
    font-size: ${fontSize.medium};

    .layout-width {
      margin-top: 20px;
    }

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 34px;
        margin: 0 10px;
        font-family: 'NanumSquareB';

        &.on {
          color: ${jmt};
        }
      }
    }
    
    .logout {
      font-size: ${fontSize.medium};
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
      <section className="top-banner">
        <NavLink to="/ai">
          <img src={topbanner} alt={t('탑배너')} />
        </NavLink>
      </section>
      <section className="site-top">
        <div className="layout-width">
          {isLogin ? (
            <>
              {/* 로그인 상태 */}
              {userInfo?.profileImage && (
                <Link to="/mypage">
                  {' '}
                  <img
                    src={userInfo.profileImage.fileUrl}
                    alt="profile"
                    width={55}
                  ></img>
                </Link>
              )}
                {userInfo?.userName}({userInfo?.email}){t('님_로그인')}
              {isAdmin && (
                <a href={adminUrl} target="_blank">
                  {t('사이트_관리')}
                </a>
              )}
              <SmallButton className="logout" color="secondary" width={100} onClick={onLogout}>
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
      <MainMenu />
    </HeaderBox>
  );
};

export default React.memo(Header);
