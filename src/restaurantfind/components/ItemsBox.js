import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';
import fontSize from '../../styles/fontSize';
import { color } from '../../styles/color';

const ItemBox = ({ item, className }) => {
  const { rstrId, images, rstrNm, rstrIntrcnCont, naverGrad, awardInfoDscrn } = item;
  const url = `/restaurant/info/${rstrId}`;
  
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
          {(naverGrad || awardInfoDscrn) && (
            <div className="evaluation">
              {naverGrad && (
                <div className="navergrad">
                  네이버 평점 : {parseFloat(naverGrad).toFixed(1)}
                </div>
              )}
              {awardInfoDscrn && (
                <div className="awardInfoDscrn">
                  어워드 : {awardInfoDscrn}
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 20px;
  margin-bottom: 15px;
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
      padding: 0 20px;

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
    Array.isArray(items) && items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.rstrId} item={item} />)
  );
};

export default React.memo(ItemsBox);