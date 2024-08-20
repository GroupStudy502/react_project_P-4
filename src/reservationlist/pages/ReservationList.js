import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const ReservationList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('예약내역')}</title>
      </Helmet>
    </>
  );
};

export default React.memo(ReservationList);