import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import { MainTitle } from '../../commons/components/TitleBox';
import WishListContainer from '../containers/WishListContainer';

const WishRestaurant = () => {
  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{t('찜한_식당')}</title>
      </Helmet>
      <MainTitle>{t('찜한_식당')}</MainTitle>
      <WishListContainer />
    </MemberOnlyContainer>
  );
};

export default React.memo(WishRestaurant);
