import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Myprofile from './Myprofile';

const MypageList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="mymember">
      <Myprofile />

      <ButtonGroup width={600}>
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
          onClick={() => navigate('/board/write/freetalk')}
        >
          {t('리뷰_작성')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/board/wishlist/restaurant')}
        >
          {t('찜한_식당')}
        </BigButton>
        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/reserve')}
        >
          {t('예약_내역')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
