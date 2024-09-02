import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox, ListOuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import CurrentAddress from '../../kakaoapi/CurrentAddress';
import NearContainer from '../containers/NearContainer';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";

const NearList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('주변_식당')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('주변_식당')}</MainTitle>
        <ListOuterBox>
          <CurrentAddress />
          <NearContainer />
        </ListOuterBox>
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </OuterBox>
    </>
  );
};

export default React.memo(NearList);
