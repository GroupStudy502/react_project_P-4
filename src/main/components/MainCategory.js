import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from '../../images/category/1.PNG';
import image2 from '../../images/category/2.PNG';
import image3 from '../../images/category/3.PNG';
import image4 from '../../images/category/4.PNG';
import image5 from '../../images/category/5.PNG';
import image6 from '../../images/category/6.PNG';
import image7 from '../../images/category/7.PNG';
import image8 from '../../images/category/8.PNG';
import image9 from '../../images/category/9.PNG';
import image10 from '../../images/category/10.PNG';
import image11 from '../../images/category/11.PNG';
import image12 from '../../images/category/12.PNG';
import image13 from '../../images/category/13.PNG';
import image14 from '../../images/category/14.PNG';
import image15 from '../../images/category/15.PNG';

const CategoryListWrap = styled.div`
  0 200px 200px;
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
  width: 200px;
  height: 200px;
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
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 16px;
  margin-top: 7px;
  text-align: center;
`;

const MainCategory = ({}) => {
  const { t } = useTranslation();
  return (
    <CategoryListWrap>
      <CategoryList>
        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=한식">
              <img src={image1} alt="한식" />
            </Link>
          </IconWrap>
          <Title>한식</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=중국식">
              <img src={image2} alt="중식" />
            </Link>
          </IconWrap>
          <Title>중식</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=일식">
              <img src={image3} alt="일식" />
            </Link>
          </IconWrap>
          <Title>일식</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=분식">
              <img src={image4} alt="분식" />
            </Link>
          </IconWrap>
          <Title>분식</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=경양식">
              <img src={image5} alt="경양식" />
            </Link>
          </IconWrap>
          <Title>경양식</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=패밀리레스토랑">
              <img src={image6} alt="패밀리레스토랑" />
            </Link>
          </IconWrap>
          <Title>패밀리레스토랑</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=패스트푸드">
              <img src={image7} alt="패스트푸드" />
            </Link>
          </IconWrap>
          <Title>패스트푸드</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=호프/통닭">
              <img src={image8} alt="치킨" />
            </Link>
          </IconWrap>
          <Title>치킨</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=식육(숯불구이)">
              <img src={image9} alt="구이" />
            </Link>
          </IconWrap>
          <Title>구이</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=회집">
              <img src={image10} alt="회" />
            </Link>
          </IconWrap>
          <Title>회</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=탕류(보신용)">
              <img src={image11} alt="탕/국밥" />
            </Link>
          </IconWrap>
          <Title>탕/국밥</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=냉면집">
              <img src={image12} alt="냉면" />
            </Link>
          </IconWrap>
          <Title>냉면</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=외국음식전문점(인도,태국등)">
              <img src={image13} alt="외국음식전문점" />
            </Link>
          </IconWrap>
          <Title>외국음식전문점</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=커피숍">
              <img src={image14} alt="커피" />
            </Link>
          </IconWrap>
          <Title>커피</Title>
        </ListItem>

        <ListItem>
          <IconWrap>
            <Link to="/restaurant/list?dbsnsStatmBzcndNm=제과점영업">
              <img src={image15} alt="베이커리" />
            </Link>
          </IconWrap>
          <Title>베이커리</Title>
        </ListItem>
      </CategoryList>
    </CategoryListWrap>
  );
};

export default React.memo(MainCategory);
