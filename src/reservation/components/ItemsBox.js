import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegCalendarCheck } from "react-icons/fa";
import { ImageBgBox } from '../../commons/components/ImageBox';

const Resname = styled.div`
  font-weight: bold;
  font-size: 1.7em;
`;

const Resadress = styled.div`
  font-weight: bold;
  font-size: 1.0em;
  color: #666;
`;

const Resinfo = styled.div`
 font-weight: bold;
  font-size: 1.2em;
  color: #ff3d00;
  .rDateTime,
  .persons {
    display: inline-block;
    margin-right: 6px;
  }
`;

const ResorderNo = styled.div`
  font-weight: bold;
  font-size: 1.0em;
  margin-bottom: 20px;
`;

const ReservationButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #ff3d00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;

  &:hover {
    background-color: #d03e12;
  }
`;

const ItemBox = ({ item, className }) => {
  const url = `/reservation/info/${item?.orderNo}`;

  return (
    <li className={className}>

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
            <ResorderNo>
              <div className="orderNo">
              <FaRegCalendarCheck />
              <strong>  </strong>{item?.orderNo}
              </div>
            </ResorderNo>
            <Resname>
              <div className="rname">
                {item?.rname}
              </div>
            </Resname>
            <Resadress>
              <div className="raddress">
                {item?.raddress}
              </div>
            </Resadress>
            <Resinfo>
              <div className="rDateTime">
                {item?.rDateTime}
              </div>
              <div className="persons">
                {item?.persons}명
              </div>
            </Resinfo>
            <Link to={url}>
              <ReservationButton>예약 정보</ReservationButton>
            </Link>
        </div>
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
    text-decoration: none;
    color: inherit;

    .item-content {
      width: 100%;
      word-break: break-all;
    }
  }
`;

const ItemsBox = ({ items = [] }) => {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => <ItemStyledBox key={index} item={item} />)
      ) : (
        <li>항목이없습니다.</li>
      )}
    </ul>
  );
};

export default React.memo(ItemsBox);
