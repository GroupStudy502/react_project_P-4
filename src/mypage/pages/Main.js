import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import MypageList from '../component/MypageList';
import MypageContainer from '../containers/MypageContainer';
import ModalChat from '../../ai/components/ModalChat';
import { RiRobot2Line } from "react-icons/ri";
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
      <ModalChat>
          <RiRobot2Line style={{width: '50px', height: '50px'}}/>
        </ModalChat>

    </MemberOnlyContainer>
  );
};

export default React.memo(Main);