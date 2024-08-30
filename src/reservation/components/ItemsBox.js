import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const ItemBox = ({ item, className }) => {
  const url = `/reservation/info/${item?.orderNo}`;
  const { t } = useTranslation();
  const {
    restaurant: { rstrId, images },
  } = item;
  return (
    <li className={className}>
      <Link to={url}>
        <div className="item-content">
          <div className="rName">{item?.rName}</div>
          <div className="rDateTime">{item?.rDateTime}</div>
          <div className="persons">{item?.persons}</div>
          <div className="name">{item?.name}</div>
          <div className="email">{item?.email}</div>
          <div className="mobile">{item?.mobile}</div>
        </div>
      </Link>
      <Link to={'/board/write/review?rstrId=' + rstrId}>{t('후기작성')}</Link>
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
