import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import MypageList from '../component/MypageList';
import MypageContainer from '../containers/MypageContainer';
import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../commons/components/TitleBox';




const Main = () => {

  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <MainTitle>
     {t('마이_페이지')}
     </MainTitle>
      <MypageList />
    </MemberOnlyContainer>
  );
};

export default React.memo(Main);