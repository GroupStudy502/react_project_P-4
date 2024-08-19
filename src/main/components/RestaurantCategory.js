import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CategoryListWrap = styled.div`
  0 20px 20px;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 20%;
  position: relative;
  max-width: 20%;
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  background-color: #f9f9f9;
  border-radius: 4.05px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 7px;
  text-align: center;
`

const RestaurantCategory = ({}) => {
  const { t } = useTranslation();
  return (
    <CategoryListWrap>
      <CategoryList>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>한식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>중식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>양식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>일식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>아시안</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>구이</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>치킨</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>패스트푸드</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>돈까스</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>분식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>회/해물</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>샌드위치</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>샐러드</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>커피/차</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>디저트</Title>
        </ListItem>
      </CategoryList>
    </CategoryListWrap>
  );
};

export default React.memo(RestaurantCategory);