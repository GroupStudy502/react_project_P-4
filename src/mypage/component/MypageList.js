import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
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
          {t('회원정보수정')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/review')}
        >
          {t('리뷰 작성')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/jjim')}
        >
          {t('찜한 내역')}
        </BigButton>
        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/reserve')}
        >
          {t('예약 내역')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
