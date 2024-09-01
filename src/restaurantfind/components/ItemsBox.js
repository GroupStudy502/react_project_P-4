import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';
import fontSize from '../../styles/fontSize';
import { color } from '../../styles/color';

const ItemBox = ({ item, className }) => {
  const { t } = useTranslation();

  const { rstrId, images, rstrNm, rstrIntrcnCont, naverGrad, awardInfoDscrn, prkgPosYn, petEntrnPosblYn, dcrnYn, fgggMenuOfrYn, wifiOfrYn, mbPmamtYn, smorderYn } = item;
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
          {(prkgPosYn || petEntrnPosblYn) && (
            <div className="convenience">
              {prkgPosYn && (
                <div className="prkgPosYn">
                  {t('주차_가능')}
                </div>
              )}
              {petEntrnPosblYn && (
                <div className="petEntrnPosblYn">
                  {t('반려동물_동반')}
                </div>
              )}
              {dcrnYn && (
                <div className="dcrnYn">
                  {t('유아시설')}
                </div>
              )}
              {fgggMenuOfrYn && (
                <div className="fgggMenuOfrYn">
                  {t('다국어_메뉴판')}
                </div>
              )}
              {wifiOfrYn && (
                <div className="wifiOfrYn">
                  {t('무선인터넷')}
                </div>
              )}
              {mbPmamtYn && (
                <div className="mbPmamtYn">
                  {t('모바일_페이먼트')}
                </div>
              )}
              {smorderYn && (
                <div className="smorderYn">
                  {t('스마트_오더')}
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
  padding: 20px 0;
  border-radius: 5px;

  a {
    display: flex;

    .photo {
      border-radius: 5px;
    }

    .item-content {
      width: calc(100% - 160px);
      word-break: break-all;
      padding: 0 30px;

      .title {
        font-family: 'NanumSquareB';
        font-size: ${fontSize.big};
        margin-bottom: 10px;
      }

      .description {
        margin-bottom: 20px;
      }
      
      .evaluation {
        div{
          font-family: 'NanumSquareB';
          color: ${color.jmt};
          margin-bottom: 10px;
        }
      }
    }
    
    .convenience {
      color: #8f8f8f;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;

      div {
        margin-right: 7px;
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