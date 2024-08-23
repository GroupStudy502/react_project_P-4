import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Myprofile from './Myprofile';

const MypageList = () => {

  const { t } = useTranslation();

  return (
    <div className="mymember">
        <Myprofile />

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
      

        <NavLink
          to="/mypage/review"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          <ButtonGroup width={300} height={300}>
            <BigButton type="submit" color="dark">
              {t('리뷰 작성')}
            </BigButton>
          </ButtonGroup>
        </NavLink>
     
   
      <NavLink
          to="/mypage/jjim"
          className={({ isActive }) => classNames({ on: isActive })}
        >
      <ButtonGroup width={300} height={300}>
        <BigButton type="submit" color="dark">
          {t('찜한 내역')}
        </BigButton>
      </ButtonGroup>
      </NavLink>
    

   
      <NavLink
          to="/mypage/reserve"
          className={({ isActive }) => classNames({ on: isActive })}
        ></NavLink>
      <ButtonGroup width={300} height={300}>
        <BigButton type="submit" color="dark">
          {t('예약 내역')}
        </BigButton>
      </ButtonGroup>
   
      </div>
  );
};

export default React.memo(MypageList);
