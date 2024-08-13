import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';

const DetailsMain = () => {
    const { t } = useTranslation();
  
    return (
        <>
        <Helmet>
          <title>{t('매장상세')}</title>
        </Helmet>
        <OuterBox>
        <MainTitle>{t('매장상세')}</MainTitle> 
        </OuterBox>
        </>
    );
  };
  
  export default React.memo(DetailsMain);