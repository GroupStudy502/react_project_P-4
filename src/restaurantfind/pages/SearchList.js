import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
import SearchContainer from '../containers/SearchContainer';

const SearchList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('식당_검색')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('식당_검색')}</MainTitle>
        <SearchContainer />
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </OuterBox>
    </>
  );
};

export default React.memo(SearchList);
