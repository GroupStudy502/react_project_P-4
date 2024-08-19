import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const FloatingContainer = styled.div`
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
  height: 50px; 
  
`;

const FloatingBar = () => {
  const { t } = useTranslation();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <FloatingContainer>
      <IconWrapper onClick={handleBookmarkClick}>
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </IconWrapper>
      <Link to="/reservation" style={{ flex: 1 }}>
        <StyledButton type="button" color="primary">
          {t('예약하기')}
        </StyledButton>
      </Link>
    </FloatingContainer>
  );
};

export default React.memo(FloatingBar);