import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';

const FloatingContainer = styled.div`
  background-color: #fff;
  width: 900px;
  height: 80px;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: calc(50% - 450px);
`;

const FloatingBar = () => {
  const { t } = useTranslation();

  return (
    <FloatingContainer>
      <Link to="/reservation">
        <MidButton type="button" color="primary">
          {t('예약하기')}
        </MidButton>
      </Link>
    </FloatingContainer>
  );
};

export default React.memo(FloatingBar);
