import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import fontSize from '../../styles/fontSize';

const { medium } = fontSize;

const Wrapper = styled.div`
  width: 100%;
  word-break: break-all;

  dl {
    display: flex;

    padding: 10px 15px;

    dt {
      width: 100px;
    }

    dd {
      width: calc(100% - 120px) l;
    }
  }

  dl + dl {
    border-top: 1px dashed #818181;
  }
`;

const ItemDescription = ({ item }) => {
  const { t } = useTranslation();
  const {
    bsnsTmCn,
    rstrNm,
    rstrIntrcnCont,
    hmpgUrl,
    rstrTelNo,
    restdyInfoCn,
    rstrRdnmAdr,
  } = item; // 알맞는 식당 레스토랑 엔티티 서치

  return (
    <Wrapper>
      {rstrIntrcnCont && (
        <dl>
          <dt>{t('소개')}</dt>
          <dd>{rstrIntrcnCont}</dd>
        </dl>
      )}
      <dl>
        <dt>{t('식당명')}</dt>
        <dd>{rstrNm}</dd>
      </dl>

      <dl>
        <dt>{t('상세주소')}</dt>
        <dd>{rstrRdnmAdr}</dd>
      </dl>

      {bsnsTmCn && (
        <dl>
          <dt>{t('운영시간')}</dt>
          <dd>{bsnsTmCn}</dd>
        </dl>
      )}

      {restdyInfoCn && (
        <dl>
          <dt>{t('휴무일')}</dt>
          <dd>{restdyInfoCn}</dd>
        </dl>
      )}

      {rstrTelNo && (
        <dl>
          <dt>{t('전화번호')}</dt>
          <dd>{rstrTelNo}</dd>
        </dl>
      )}

      {hmpgUrl && (
        <dl>
          <dt>{t('홈페이지')}</dt>
          <dd>
            <a href={hmpgUrl} target="_blank">
              {hmpgUrl}
            </a>
          </dd>
        </dl>
      )}
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
