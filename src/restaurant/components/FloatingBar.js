import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import WishButton from '../../commons/components/WishButton';
import Loading from '../../commons/components/Loading';

const FloatingBox = styled.div`
  background-color: #fff;
  width: 900px;
  height: 80px;
  z-index: 10;
  position: ${(props) => (props.isFixed ? 'fixed' : 'absolute')};
  bottom: ${(props) => (props.isFixed ? '0' : 'auto')};
  left: calc(50% - 450px);
  display: flex;
  align-items: center;
  padding: 0 40px;
  border-top: 1px solid #d1cfcf;
  border-radius: 15px;
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
  font-size: 1.5em;
`;

const FloatingBar = ({ onReservationClick, item, isFixed }) => {
  const { t } = useTranslation();

  const { rstrId } = item;
  if (!item) {
    return <Loading />;
  }

  return (
    <FloatingBox isFixed={isFixed}>
      <ContentWrapper>
        <IconWrapper>
          <WishButton seq={rstrId} type="RESTAURANT" />
        </IconWrapper>
        <StyledButton type="button" color="jmt" onClick={onReservationClick}>
          {t('예약하기')}
        </StyledButton>
      </ContentWrapper>
    </FloatingBox>
  );
};

export default React.memo(FloatingBar);
