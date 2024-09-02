import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin-top: 20px; 
  padding: 10px;
  border-top: 1px solid #ddd;
`;


const StyledListItems = styled(ListItems)`
  margin-bottom: 20px; 
`;

const List = ({ board, items, search, onChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <StyledListItems items={items} />
      <Wrapper>
        <ListSearchForm search={search} onSubmit={onChange} />
      </Wrapper>
    </>
  );
};

export default React.memo(List);