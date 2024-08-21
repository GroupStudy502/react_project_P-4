import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ChatWrapper from '../components/ChatWrapper';

const AiPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('JeomMechu_AI')}</title>
      </Helmet>
      <ChatWrapper/>
    </>
  );
};

export default React.memo(AiPage);