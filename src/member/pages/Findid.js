import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
import FindIdContainer from '../containers/FindIdContainer';

const Join = () => {
  const { t } = useTranslation();

  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('아이디_찾기')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('아이디_찾기')}</MainTitle>
      <FindIdContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Join);