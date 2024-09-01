import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ChatWrapper from '../components/ChatWrapper';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
import { ChatOuterBox } from '../../commons/components/LayoutBox';


const AiPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('JeomMechu_AI')}</title>
      </Helmet>
      <ChatOuterBox>
        <ChatWrapper height="560px" marginTop="50px"/>
        <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>
      </ChatOuterBox>
    </>
  );
};

export default React.memo(AiPage);