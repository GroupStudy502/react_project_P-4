import React, {useState, useEffect} from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getInfo } from '../../board/apis/apiBoard';
import styled from 'styled-components';

const NoDataText = styled.div`
  font-size: 16px;
  color: #818181;
`;

const TabReview = () => {
  const { t } = useTranslation();
  const [boardData, setBoardData] = useState(null);
  const { seq } = useParams();

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const data = await getInfo(seq);
        setBoardData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBoardData();
  }, [seq]);

  return (
    <Tab.Pane eventKey="review">
      <div>
        {boardData ? (
          <>
            <h2>{boardData.subject}</h2>
            <p>{boardData.content}</p>
            <p>{boardData.poster}</p>
            <p>{boardData.viewCount}</p>
          </>
        ) : (
          <NoDataText>{t('리뷰 정보가 없습니다')}</NoDataText>
        )}
      </div>
    </Tab.Pane>
  );
};

export default React.memo(TabReview);