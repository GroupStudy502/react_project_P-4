import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fontSize from '../../styles/fontSize';
import { SmallButton } from '../../commons/components/Buttons';

const { medium } = fontSize;

const Wrapper = styled.div`
  width: 100%;
  word-break: break-all;
  margin: 10px 0;

  dl {
    display: flex;
    padding: 10px 15px;
    align-items: center; /* Center items vertically */
    justify-content: space-between; /* Space between dt and dd */

    dt,
    dd {
      display: flex;
      align-items: center;
      justify-content: center; /* Center content horizontally */
      width: 50%; /* Each dt and dd takes up 50% of the row */
    }

    dt {
      text-align: center; /* Center text within dt */
    }

    dd {
      text-align: center; /* Center text within dd */
    }
  }

  dl:first-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 50%; /* Each button takes up 50% of the width */
  padding: 8px 12px;
  background-color: #ff3d00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;

  &:hover {
    background-color: #d03e12;
  }

  &:nth-of-type(1) {
    margin-right: 10px; /* Space between the first and second button */
  }
`;

const StyledLinkButton = styled(Link)`
  width: 50%; /* Each button takes up 50% of the width */
  padding: 8px 12px;
  background-color: #ff3d00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  margin: 1px; /* Fixed missing value issue */

  &:hover {
    background-color: #d03e12 !important;
  }

  & + & {
    margin-left: 10px; /* Space between buttons */
  }
`;

const ReservationItem = ({ item, onCancel }) => {
  const { t } = useTranslation();
  const {
    orderNo,
    rname,
    raddress,
    rTel,
    rDateTime,
    persons,
    name,
    email,
    mobile,
    status,
    statusStr,
    totalPayPrice,
    restaurant,
  } = item;

  return (
    <Wrapper>
      {orderNo && (
        <dl>
          <dt>{t('예약_번호')}</dt>
          <dd>{orderNo}</dd>
        </dl>
      )}

      {rname && (
        <dl>
          <dt>{t('식당명')}</dt>
          <dd>{rname}</dd>
        </dl>
      )}
      
      {raddress && (
        <dl>
          <dt>{t('식당_주소')}</dt>
          <dd>{raddress}</dd>
        </dl>
      )}

      {rTel && (
        <dl>
          <dt>{t('식당_연락처')}</dt>
          <dd>{rTel}</dd>
        </dl>
      )}

      {rDateTime && (
        <dl>
          <dt>{t('예약_일시')}</dt>
          <dd>{rDateTime}</dd>
        </dl>
      )}

      {persons && (
        <dl>
          <dt>{t('예약_인원')}</dt>
          <dd>{persons}</dd>
        </dl>
      )}

      <dl>
        <dt>{t('예약자_성함')}</dt>
        <dd>{name}</dd>
      </dl>

      {email && (
        <dl>
          <dt>{t('이메일')}</dt>
          <dd>{email}</dd>
        </dl>
      )}

      {mobile && (
        <dl>
          <dt>{t('전화번호')}</dt>
          <dd>{mobile}</dd>
        </dl>
      )}

      <dl>
        <dt>{t('예약상태')}</dt>
        <dd>
          {statusStr}
          {['START', 'APPLY', 'CONFIRM'].includes(status) && (
            <button type="button" onClick={() => onCancel(orderNo)}>
              {t('예약취소')}
            </button>
          )}
        </dd>
      </dl>

      {totalPayPrice && (
        <dl>
          <dt>{t('결제_금액')}</dt>
          <dd>{totalPayPrice}</dd>
        </dl>
      )}

      <ButtonWrapper>
        <StyledButton type="button">{t('취소하기')}</StyledButton>
        <StyledLinkButton
          to={`/board/write/review?rstrId=${restaurant.rstrId}`}
        >
          {t('후기_작성하기')}
        </StyledLinkButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default React.memo(ReservationItem);
