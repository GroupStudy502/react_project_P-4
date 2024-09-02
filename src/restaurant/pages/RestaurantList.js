import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ListContainer from '../containers/ListContainer';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";import styled from "styled-components";

const RestaurantList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('식당_목록')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('식당_목록')}</MainTitle>
        <ListContainer />
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </OuterBox>
    </>
  );
};

export default React.memo(RestaurantList);
