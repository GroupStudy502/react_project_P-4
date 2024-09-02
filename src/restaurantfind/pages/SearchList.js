import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox, ListOuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import SearchContainer from '../containers/SearchContainer';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";

const SearchList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('식당_검색')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('식당_검색')}</MainTitle>
        <ListOuterBox>
          <SearchContainer />
        </ListOuterBox>
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </OuterBox>
    </>
  );
};

export default React.memo(SearchList);
