import React from 'react';
import { Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { NoDataText } from './NoDataText';

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    max-width: 250px;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const TabMenuPhoto = ({ item }) => {
  const { t } = useTranslation();

  const hasImages =
    item.foods && item.foods.some((food) => food.images.length > 0);

  return (
    <Tab.Pane eventKey="photo">
      {hasImages ? (
        <ImagesContainer>
          {item.foods.map((food) =>
            food.images.map((image) => (
              <img key={image.seq} src={image.foodImgUrl} alt={food.menuNm} />
            )),
          )}
        </ImagesContainer>
      ) : (
        <NoDataText>{t('사진 정보가 없습니다')}</NoDataText>
      )}
    </Tab.Pane>
  );
};

export default React.memo(TabMenuPhoto);
