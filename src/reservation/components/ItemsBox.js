import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { ImageBgBox } from '../../commons/components/ImageBox';


const ResaddressWithIcon = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* 아이콘+글씨 줄 아래 마진 */
  margin-top: 30px; /* 아이콘+글씨 줄 위 마진 */

  svg {
    margin-right: 7px; /* 아이콘과 글씨 사이 간격 */
    font-size: 1.1em; /* 아이콘 크기 */
  }

  h2 {
    margin: 0; /* Remove default margin from h2 */
    font-size: 0.8em; /* h2 글씨 크기(...선택해 주세요) */
    font-weight: bold;
  }
`;

const Resname = styled.div`
  font-weight: bold;
  font-size: 1.7em;
`;

const Resaddress = styled.div`
  font-weight: bold;
  font-size: 1em;
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
  font-size: 1em;
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
  const {
    restaurant: { images, rstrNm },
  } = item;

  return (
    <li className={className}>
      <div className="item-inner">
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
              <ResaddressWithIcon>
                <FaRegCalendarCheck />
                <h2>{item?.orderNo}번</h2>
              </ResaddressWithIcon>
            </div>
          </ResorderNo>
          <Resname>
            <div className="rname">{item?.rname}</div>
          </Resname>
          <Resaddress>
            <div className="raddress">{item?.raddress}</div>
          </Resaddress>
          <Resinfo>
            <div className="rDateTime">{item?.rDateTime}</div>
            <div className="persons">{item?.persons}명</div>
          </Resinfo>
          <Link to={url}>
            <ReservationButton>예약 정보</ReservationButton>
          </Link>
        </div>
      </div>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;

  .item-inner {
    display: flex;
    align-items: center;
  }

  .photo {
    margin-right: 20px;
    flex-shrink: 0;
  }

  .item-content {
    width: 100%;
    word-break: break-all;
  }

  a {
    text-decoration: none;
    color: inherit;
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
