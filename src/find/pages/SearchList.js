import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import SearchContainer from '../containers/SearchContainer';

const SearchList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('식당 검색')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('식당 검색')}</MainTitle>
        <SearchContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(SearchList);
