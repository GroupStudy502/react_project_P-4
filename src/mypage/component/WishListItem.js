import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  border: 3px;
`;

const ItemBox = ({ item, className }) => {
  return <li className={className}>{item.rstrNm}</li>;
};

const StyledItemBox = styled(ItemBox)`
  background-color: pink; /* 배경색을 핑크색으로 설정 */
  outline-color: black;
  border: 3px;
  border-radius: 4px; /* 둥근 모서리 */

  color: white;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  inline-size: 100px;
  margin-top: 20px;
  margin-left: 20px;
  width: 300px;
`;

const WishListItem = ({ items }) => {
  console.log(items);
  return (
    <Wrapper>
      {items &&
        items.length > 0 &&
        items.map((item) => <StyledItemBox key={item.rstrId} item={item} />)}
    </Wrapper>
  );
};

export default React.memo(WishListItem);
