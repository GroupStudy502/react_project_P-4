import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ReservationListContainer from '../containers/ReservationListContainer';

const ReservationList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('예약_내역')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('예약_내역')}</MainTitle>
        <ReservationListContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationList);