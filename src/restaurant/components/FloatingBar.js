import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const FloatingBox = styled.div`
  background-color: #fff;
  width: 900px;
  height: 80px;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: calc(50% - 450px);
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-top: 1px solid #d1cfcf;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 2em;
`;

const StyledButton = styled(MidButton)`
  flex: 1;
  height: 40px;
  font-weight: bold;
  font-size: 1.5em;
`;

const FloatingBar = ({ onReservationClick }) => {
  const { t } = useTranslation();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <FloatingBox>
      <ContentWrapper>
        <IconWrapper onClick={handleBookmarkClick}>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </IconWrapper>
        <StyledButton
          type="button"
          color="primary"
          onClick={onReservationClick}
        >
          {t('예약하기')}
        </StyledButton>
      </ContentWrapper>
    </FloatingBox>
  );
};

export default React.memo(FloatingBar);
