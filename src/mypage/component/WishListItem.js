import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`

border : 3px;

`;

const ItemBox = ({ item, className }) => {
  return <li className={className}>{item.rstrNm}</li>;
};

const StyledItemBox = styled(ItemBox)``;

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
