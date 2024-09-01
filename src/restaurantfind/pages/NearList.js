import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import NearContainer from '../containers/NearContainer';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
import CurrentAddress from '../../kakaoapi/CurrentAddress';

const NearList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('주변_식당')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('주변_식당')}</MainTitle>
        <CurrentAddress />
        <NearContainer />
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </OuterBox>
    </>
  );
};

export default React.memo(NearList);
