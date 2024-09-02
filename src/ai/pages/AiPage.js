import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ChatWrapper from '../components/ChatWrapper';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
import { ChatOuterBox, OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';


const AiPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('JeomMechu_AI')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('JeomMechu_AI')}</MainTitle>
        <ChatOuterBox>
          <ChatWrapper height="560px" marginTop="50px"/>
          <ModalChat>
            <RiRobot2Line style={{width: '50px', height: '50px'}}/>
          </ModalChat>
        </ChatOuterBox>
      </OuterBox>
    </>
  );
};

export default React.memo(AiPage);