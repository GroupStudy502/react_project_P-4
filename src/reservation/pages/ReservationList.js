import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ReservationListContainer from '../containers/ReservationListContainer';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const ReservationList = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <MemberOnlyContainer>
        <OuterBox>
          <MainTitle>{pageTitle}</MainTitle>
          <ReservationListContainer setPageTitle={setPageTitle} />
        </OuterBox>
      </MemberOnlyContainer>
    </>
  );
};

export default React.memo(ReservationList);