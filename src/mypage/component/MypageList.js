import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

const MypageList = () => {
  const { t } = useTranslation();

  return (
    <div className="mypage-main">
      <NavLink
        to="/mypage/info"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        <ButtonGroup width={300} height={300}>
          <BigButton type="submit" color="dark">
            {t('회원정보수정')}
          </BigButton>
        </ButtonGroup>
      </NavLink>

      <ButtonGroup width={300} height={300}>
        <BigButton type="submit" color="dark">
          {t('리뷰작성')}
        </BigButton>
      </ButtonGroup>

      <ButtonGroup width={300} height={300}>
        <BigButton type="submit" color="dark">
          {t('찜한내역')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
