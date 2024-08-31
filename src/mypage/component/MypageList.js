import React, { memo, useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';
import UserInfoContext from '../../member/modules/UserInfoContext';

const ImageBox = styled.img`
  display: block;
  width: 200px;
  margin: auto;
  
`;

const MypageList = () => {
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="mymember">
      {userInfo?.profileImage && (
        <Link to="/mypage">
          <ImageBox src={userInfo.profileImage.fileUrl} alt="profile" />
        </Link>
      )}
      <ButtonGroup width={500}>
        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/info')}
        >
          {t('회원정보_수정')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/board/write/review')}
        >
          {t('리뷰_작성')}
        </BigButton>

        <BigButton
          type="submit"
          color="dark"
          onClick={() => navigate('/mypage/wishlist/restaurant')}
        >
          {t('찜한_식당')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
