import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import MypageContainer from '../containers/MypageContainer';

const MypageMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('마이페이지')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('마이페이지')}</MainTitle>
        <MypageContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(MypageMain);
