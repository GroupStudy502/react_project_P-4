import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import NearContainer from '../containers/NearContainer';
import CurrentAdress from '../../kakaoapi/CurrentAdress';

const NearList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('주변_식당')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('주변_식당')}</MainTitle>
        <CurrentAdress />
        <NearContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(NearList);
