import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MainContainer from '../containers/MainContainer';
import ModalChat from '../../ai/components/ModalChat';
import styled from 'styled-components';

const MainOuterBox = styled.div`
  max-width: 1200px;
  min-width: 900px;
  padding: 50px;
  margin: 50px auto;
`;

const Title = styled.div`
  font-size: 1.75rem;
`;

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('점메추')}</title>
      </Helmet>
      <MainOuterBox>
        <Title>{t('오늘 점심 뭐 먹을까 고민 될 땐? 점메추!')}</Title>
        <MainContainer />
      </MainOuterBox>
      <ModalChat>{t('점메추 AI')}</ModalChat>
    </>
  );
};

export default React.memo(Main);
