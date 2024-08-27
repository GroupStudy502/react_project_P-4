import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ChatWrapper from '../components/ChatWrapper';
import { OuterBox } from '../../commons/components/LayoutBox';


const AiPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('JeomMechu_AI')}</title>
      </Helmet>
      <OuterBox>
        <ChatWrapper height="560px" marginTop="50px"/>
      </OuterBox>
    </>
  );
};

export default React.memo(AiPage);