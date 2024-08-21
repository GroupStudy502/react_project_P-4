import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';

const MypageList = () => {
  const { t } = useTranslation();

  return (
    <div className="mypage-main">
      <ButtonGroup width={400} height={300}>
        <BigButton type="submit" color="dark" onClick={alert}>
          {t('회원정보수정')}
        </BigButton>
        <BigButton type="submit" color="dark" onClick={alert}>
          {t('리뷰작성')}
        </BigButton>
        <BigButton type="submit" color="dark" onClick={alert}>
          {t('찜한내역')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
