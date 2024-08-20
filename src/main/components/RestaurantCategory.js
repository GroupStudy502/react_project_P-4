import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import korean from '../../images/category/korean.png';
import chinese from '../../images/category/chinese.png';

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
            <img src={korean} />
          </IconWrap>
          <Title>한식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
          <img src={chinese} />
          </IconWrap>
          <Title>중식</Title>
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
          <Title>분식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>경양식</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>패밀리레스토랑</Title>
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
          <Title>치킨</Title>
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
          <Title>회</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>탕/국밥</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>냉면</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>외국음식전문점</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>커피</Title>
        </ListItem>
        <ListItem>
          <IconWrap>
            <img src="https://d3kzx7mqemhf0.cloudfront.net/common_img/comm_23122719075605249.webp"></img>
          </IconWrap>
          <Title>베이커리</Title>
        </ListItem>
      </CategoryList>
    </CategoryListWrap>
  );
};

export default React.memo(RestaurantCategory);