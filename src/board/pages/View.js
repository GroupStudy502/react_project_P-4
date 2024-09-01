import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ViewContainer from '../containers/ViewContainer';

const View = () => {
 const [pageTitle, setPageTitle] = useState('');


  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
        <ViewContainer setPageTitle={setPageTitle}/>
      </OuterBox>
    </>
  );
};

export default React.memo(View);