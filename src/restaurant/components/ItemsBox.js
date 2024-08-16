import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';

const ItemBox = ({ item, className }) => {
  const { rstrId, images, rstrNm, rstrIntrcnCont } = item;
  const url = `/restaurant/info/${rstrId}`;
  return (
    <li className={className}>
      <Link to={url}>
        {images && images.length > 0 && <ImageBgBox className="photo" url={images[0].rstrImgUrl} alt={rstrNm} width="150px" height="150px" />}
        <div className="item-content">
          <div className="title">{rstrNm}</div>
          <div className="description">{rstrIntrcnCont}</div>
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