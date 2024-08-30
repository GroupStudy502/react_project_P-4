import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import fontSize from '../../styles/fontSize';

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

const ReservationItem = ({ item }) => {
  const { t } = useTranslation();
  const {
    rname,
    rDateTime,
    persons,
    name,
    email,
    mobile,
  } = item;

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
    </Wrapper>
  );
};

export default React.memo(ReservationItem);
