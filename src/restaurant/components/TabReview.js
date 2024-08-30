import React, {useState, useEffect} from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Pagination from '../../commons/components/Pagination';

import styled from 'styled-components';

const NoDataText = styled.div`
  font-size: 16px;
  color: #818181;
`;

const TabReview = ({ items, pagination, onPageClick }) => {
  const { t } = useTranslation();
  
  return (
    <Tab.Pane eventKey="review">
      <div>
        {items && items.length > 0 ? (
          items.map(({ subject, content, poster, viewCount }) => (
            <>
              <h2>{subject}</h2>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
              <p>{poster}</p>
              <p>{viewCount}</p>
            </>
          ))
        ) : (
          <NoDataText>{t('리뷰 정보가 없습니다')}</NoDataText>
        )}
      </div>
      {pagination && (
        <Pagination pagination={pagination} onClick={onPageClick} />
      )}
    </Tab.Pane>
  );
};

export default React.memo(TabReview);