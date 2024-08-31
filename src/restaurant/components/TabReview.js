import React, { useState, useEffect } from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Pagination from '../../commons/components/Pagination';
import { NoDataText } from './NoDataText';

import styled from 'styled-components';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';

const { medium, big } = fontSize;

const ReviewWrapper = styled.div`
  width: 100%;
  word-break: keep-all;

  dl {
    padding: 10px 10px;

    dt {
      width: 100%;
      font-size: ${big};
      font-weight: bold;
      letter-spacing: 3px;
    }

    dd {
      width: calc(100% - 120px);
      margin-top: 10px;
    }
  }

  dl + dl {
    border-top: 1px solid #e5e5e5;
  }
`;

const TabReview = ({ items, pagination, onPageClick }) => {
  const { t } = useTranslation();

  return (
    <Tab.Pane eventKey="review">
      {items && items.length > 0 ? (
        items.map(({ seq, content, poster, viewCount }) => (
          <ReviewWrapper>
            <dl key={seq}>
              <dt>{poster}</dt>
              <dd dangerouslySetInnerHTML={{ __html: content }}></dd>
              <p>{viewCount}</p>
            </dl>
          </ReviewWrapper>
        ))
      ) : (
        <NoDataText>{t('리뷰 정보가 없습니다')}</NoDataText>
      )}

      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
    </Tab.Pane>
  );
};

export default React.memo(TabReview);
