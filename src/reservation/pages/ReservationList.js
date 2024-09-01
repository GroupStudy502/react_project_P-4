import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../commons/components/TitleBox';
import ReservationListContainer from '../containers/ReservationListContainer';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const ReservationList = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('나의_예약_내역')}</title>
      </Helmet>
      <MemberOnlyContainer>
        <OuterBox>
          <MainTitle>{t('나의_예약_내역')}</MainTitle>
          <ReservationListContainer />
          <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>

        </OuterBox>
      </MemberOnlyContainer>
    </>
  );
};

export default React.memo(ReservationList);
