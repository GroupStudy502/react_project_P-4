import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ModalChat from '../../commons/components/ModalChat';
import CategoryContainer from '../containers/CategoryContainer';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('점메추')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('배너')}</MainTitle>
        <MainTitle>{t('식당 카테고리')}</MainTitle>
        <CategoryContainer />
      </OuterBox>
      <ModalChat>{t('점메추 AI')}</ModalChat>
    </>
  );
};

export default React.memo(Main);
