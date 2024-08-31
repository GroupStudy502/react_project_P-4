import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import { MainTitle } from '../../commons/components/TitleBox';
import MypageProfileContainer from '../containers/MypageProfileContainer';

const Info = () => {
  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{t('회원정보_수정')}</title>
      </Helmet>

      <MainTitle>{t('회원정보_수정')}</MainTitle>
     <MypageProfileContainer />

    </MemberOnlyContainer>
  );
};

export default React.memo(Info);
