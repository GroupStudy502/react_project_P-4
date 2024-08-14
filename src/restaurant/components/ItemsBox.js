import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';

const ItemBox = ({item, className}) => {
    const { rstrId, images, rstrNm, areaNm, dbsnsStatmBzcndNm} = item;
    const url = `/restaurant/info/${rstrId}`;
/*
 {photoUrl && <ImageBgBox url={photoUrl} width="150px" height="150px" />}
*/
    return (
    <li className={className}>
      <Link to={url}>
        {images && images.length > 0 && (
            <div className="photo">
                <img src={images[0].rstrImgUrl} alt={rstrNm} />
                
            </div>
            )}
           <div className="item-content">
            <div className='title'>{rstrNm}</div>
            <div className="area">{areaNm}</div> 
            <div className="category">{dbsnsStatmBzcndNm}</div>
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
      margin-radius: 5px;
    }

    .item-content{
      width: calc(100% - 160px);
      word-break: break-all;
    }
  }

`;

  
const ItemsBox = ({ items }) => {
    return (
      items.length > 0 && (
        <ul>
          {items.map((item) => (
            <ItemBox key={item.rstrId} item={item} />
          ))}
        </ul>
      )
    );
  };
export default React.memo(ItemsBox);