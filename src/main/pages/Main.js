import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MainContainer from '../containers/MainContainer';
import ModalChat from '../../ai/components/ModalChat';
import styled from 'styled-components';
import { RiRobot2Line } from "react-icons/ri";

const MainOuterBox = styled.div`
  max-width: 1200px;
  min-width: 1000px;
  padding: 50px;
  margin: 50px auto;
`;

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
          <RiRobot2Line />
           {t('점메추_AI')}
        </ModalChat>
      </MainOuterBox>
    </>
  );
};

export default React.memo(Main);
