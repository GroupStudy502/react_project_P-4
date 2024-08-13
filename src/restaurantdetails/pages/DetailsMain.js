import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import { useParams } from 'react-router-dom';
import DetailsContainer from '../containers/DetailsContainer';

const DetailsMain = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Helmet>
        <title>{t('매장상세')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('매장상세')}</MainTitle>
        <DetailsContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(DetailsMain);
