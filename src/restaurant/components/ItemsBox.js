import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';

const ItemBox = ({item, className}) => {
    const { rstrId, images, rstrNm, rstrRdnmAdr} = item;
    const url = `/restaurant/detail/${rstrId}`;
/*
 {photoUrl && <ImageBgBox url={photoUrl} width="150px" height="150px" />}
*/
    return (
    <li className={className}>
      <Link to="/restaurant{rstrId}">
        {images && images.length > 0 && (
            <div className="photo">
                <img src={images[0].rstrImgUrl} alt={rstrNm} />
                
            </div>
            )}
            <div className='title'>{rstrNm}</div>
            <div className="location">{rstrRdnmAdr}</div> 
      </Link>
     </li>
    );
};

const ItemStyledBox = styled(ItemBox)`
padding: 20px;
margin-bottom: 15px;
box-shadow: 2px 2px 5px #818181;

  a {
    display: flex;

    .photo {
      margin-right: 10px;
      margin-radius: 5px;
    }

    .item-content{
      width: calc(100% - 160px);
      word-break
    }
  }

`;

  
const ItemsBox = ({ items }) => {
    return (
      items && (
        <ul>
          {items.map((item) => (
            <ItemBox key={item.rstrId} item={item} />
          ))}
        </ul>
      )
    );
  };
export default React.memo(ItemsBox);