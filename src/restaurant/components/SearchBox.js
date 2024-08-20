import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';

const FormBox = styled.form``;

const SearchBox = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <select name="areaNm" onChange={onChange}>
          <option>- {t('지역_선택')} -</option>
          <option value="GANGDONG">{t('서울특별시 강동구')}</option>
          <option value="GANGNAM">{t('서울특별시 강남구')}</option>
        </select>
      </div>
      <div>
        <select name="sopt" onChange={onChange} defaultValue={form.sopt}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="TITLE">{t('식당명')}</option>
          <option value="TEL">{t('연락처')}</option>
          <option value="ADDRESS">{t('도로명 주소')}</option>
          <option value="CATEGORY">{t('업종명')}</option>
        </select>
        <input type="text" name="skey" value={form.skey} onChange={onChange} />
      </div>
      <MidButton color="primary">{t('검색하기')}</MidButton>
    </FormBox>
  );
};

export default React.memo(SearchBox);
