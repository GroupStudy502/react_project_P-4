import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemBox = ({ item, className }) => {
  const url = `/reservation/info/${item?.orderno}`;

  return (
    <li className={className}>
      <Link to={url}>
        <div className="item-content">
          <div className="rName"><strong>식당명:</strong> {item?.rname}</div>
          <div className="rDateTime"><strong>예약 일시:</strong> {item?.rdateTime}</div>
          <div className="persons"><strong>예약 인원수:</strong> {item?.persons}명</div>
          <div className="name"><strong>예약자 성함:</strong> {item?.name}</div>
          <div className="email"><strong>예약자 이메일:</strong> {item?.email}</div>
          <div className="mobile"><strong>예약자 전화번호:</strong> {item?.mobile}</div>
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
