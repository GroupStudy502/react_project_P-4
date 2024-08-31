import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MainOuterBox } from '../../commons/components/LayoutBox';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
import MainContainer from '../containers/MainContainer';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('점메추')}</title>
      </Helmet>
      <MainOuterBox>
        <MainContainer />
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </MainOuterBox>
    </>
  );
};

export default React.memo(Main);
