import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import NearContainer from '../containers/SearchContainer';
import CurrentAdress from '../../kakaoapi/CurrentAdress';

const RestaurantNearList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('내 주변 식당 찾기')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('내 주변 식당 찾기')}</MainTitle>
        <CurrentAdress />
        <NearContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(RestaurantNearList);
