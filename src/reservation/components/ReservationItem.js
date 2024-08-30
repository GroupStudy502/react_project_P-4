import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
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

    dt {
      width: 100px;
      font-weight: normal;
    }

    dd {
      width: calc(100% - 120px) l;
    }

    a {
      height: 100%;
    }
  }

  dl:first-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const ReviewButton = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #ff3d00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #d03e12;
  }
`;

const ReservationItem = ({ item, onDelete }) => {
  const { t } = useTranslation();
  const { rname, rDateTime, persons, name, email, mobile, price } = item;
  console.log(item);
  return (
    <Wrapper>
      <dl>
        <dt>{t('식당명')}</dt>
        <dd>{rname}</dd>
      </dl>

      {rDateTime && (
        <dl>
          <dt>{t('운영시간')}</dt>
          <dd>{rDateTime}</dd>
        </dl>
      )}

      {persons && (
        <dl>
          <dt>{t('예약인원')}</dt>
          <dd>{persons}</dd>
        </dl>
      )}

      <dl>
        <dt>{t('예약자')}</dt>
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

      {price && (
        <dl>
          <dt>{t('결제금액')}</dt>
          <dd>{price}</dd>
        </dl>
      )}
        <SmallButton type="button" onClick={() => onDelete(item.orderNo)}>
          {t('예약삭제')}
        </SmallButton>
        <Link to={'/board/write/review?rstrId='}>
          <ReviewButton>{t('후기 작성하기')}</ReviewButton>
        </Link>
    </Wrapper>
  );
};

export default React.memo(ReservationItem);
