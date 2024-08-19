import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const IconWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

const RestaurantCategory = ({}) => {
  const { t } = useTranslation();
  return (
    <div class="category-list">
      <div class="list-item">
        <IconWrapper class="icon-wrap">
          <img
            src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"
            alt=""
          ></img>
        </IconWrapper>
        <div class="title">웨이팅TOP</div>
      </div>
    </div>
  );
};

export default React.memo(RestaurantCategory);
