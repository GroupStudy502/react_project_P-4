import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.div`

`

const List = ({ board,items, search, onChange}) => {
  const { t } = useTranslation();
  return (
    <>
      <ListItems items={items} />
      <Wrapper>
     
      <ListSearchForm search={search} onSubmit={onChange} />
      </Wrapper>
    </>
  );
};

export default React.memo(List);