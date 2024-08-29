import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Myprofile from './Myprofile';
import styled from 'styled-components';


const MypageList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="mymember">
      <Myprofile />

      <ButtonGroup width={500}>
        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/info')}
        >
          {t('회원정보_수정')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/board/write/review')}
        >
          {t('리뷰_작성')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/wishlist/restaurant')}
        >
          {t('찜한_식당')}
        </BigButton>
        
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
