import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';
import fontSize from '../../styles/fontSize';
import { color } from '../../styles/color';

const ItemBox = ({ item, className }) => {
  const { rstrId, images, rstrNm, rstrIntrcnCont, naverGrad, awardInfoDscrn } =
    item;
  const url = `/restaurant/info/${rstrId}`;

  const roundedNaverGrad = naverGrad ? naverGrad.toFixed(1) : null;
  return (
    <li className={className}>
      <Link to={url}>
        {images && images.length > 0 && (
          <ImageBgBox
            className="photo"
            url={images[0].rstrImgUrl}
            alt={rstrNm}
            width="150px"
            height="150px"
          />
        )}
        <div className="item-content">
          <div className="title">{rstrNm}</div>
          <div className="description">{rstrIntrcnCont}</div>
          <div className="evaluation">
            {roundedNaverGrad && (
              <div className="navergrad">네이버 평점 : {roundedNaverGrad}</div>
            )}
            
            {awardInfoDscrn && (
              <div className="awardInfoDscrn">어워드 : {awardInfoDscrn}</div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;

  a {
    display: flex;

    .photo {
      margin-right: 10px;
      border-radius: 5px;
    }

    .item-content {
      width: calc(100% - 160px);
      word-break: break-all;

      .title {
        font-family: 'NanumSquareB';
        font-size: ${fontSize.big};
      }

      .evaluation {
        margin-top: 10px;
        color: ${color.jmt};
      }
    }
  }
`;

const ItemsBox = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.rstrId} item={item} />)
  );
};

export default React.memo(ItemsBox);
