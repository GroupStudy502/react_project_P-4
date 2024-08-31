import React, { memo, useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';
import UserInfoContext from '../../member/modules/UserInfoContext';
import { FaUserCircle,FaBookmark } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const ImageBox = styled.img`
  display: flex;
  width: 170px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 70%;
  overflow: hidden;
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
          color="jmt"
          onClick={() => navigate('/mypage/info')}
        >
          <FaUserCircle style={{ 
              width: '14px',
              height: '20px',
              margin: 'auto 2',
            }}/>{t('회원정보_수정')}
        </BigButton>

        <BigButton
          type="submit"
          color="jmt"
          onClick={() => navigate('/board/list/review')}
        >
        <MdOutlineRateReview style={{ 
              width: '14px',
              height: '20px',
              margin: 'auto 2',
            }}/>{t('작성한_리뷰')}
        </BigButton>

        <BigButton
          type="submit"
          color="jmt"
          onClick={() => navigate('/mypage/wishlist/restaurant')}
        >
          <FaBookmark  style={{ 
              width: '14px',
              height: '20px',
              margin: 'auto 2',
            }}/>{t('찜한_식당')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
