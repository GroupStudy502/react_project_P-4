import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


const FormBox = styled.form`
  width: 100%;
  max-width: 600px; 
  margin: 350px auto;
  padding: 20px;
  background-color: #fff; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;


const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff; 
`;


const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 30%; 
  box-sizing: border-box; 
`;


const ListSearchForm = ({ search, onChange }) => {
  const { t } = useTranslation();
  
  return (
    <FormBox onSubmit={(e) => e.preventDefault()} autoComplete="off">
      <StyledSelect name="sopt" value={search?.sopt} onChange={onChange}>
        <option value="ALL">{t('통합검색')}</option>
        <option value="SUBJECT">{t('제목')}</option>
        <option value="CONTENT">{t('내용')}</option>
        <option value="SUBJECT_CONTENT">{t('제목+내용')}</option>
        <option value="NAME">{t('이름')}</option>
      </StyledSelect>
      <StyledInput
        type="text"
        name="skey"
        value={search?.skey}
        onChange={onChange}
        placeholder={t('검색어를_입력하세요.')}
      />
    </FormBox>
  );
};

export default React.memo(ListSearchForm);