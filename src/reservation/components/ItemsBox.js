import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemBox = ({ item = {}, className }) => {
  const { orderNo = '', rName = '', rDateTime = '', persons = '', name = '', email = '', mobile = '' } = item;
  const url = `/reservation/info/${orderNo}`;

  return (
    <li className={className}>
      <Link to={url}>
        <div className="item-content">
          <div className="rName">{rName}</div>
          <div className="rDateTime">{rDateTime}</div>
          <div className="persons">{persons}</div>
          <div className="name">{name}</div>
          <div className="email">{email}</div>
          <div className="mobile">{mobile}</div>
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
