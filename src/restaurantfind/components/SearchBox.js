import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';

import CurrentAddressGu from '../../kakaoapi/CurrentAddressGu';

const { jmt } = color;
const { medium } = fontSize;

const FormBox = styled.form``;

export const SearchButton = styled.button`
  font-size: ${medium};
  height: 40px;
  width: 100px;
  border-radius: 3px;
  cursor: pointer;
  background: ${jmt};
  color: #fff;
  border: 1px solid ${jmt};
`;

const SearchBox = ({ search, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <select name="areaNm" value={search?.areaNm} onChange={onChange}>
          <option value="">
            {t('현재_위치')}
            <CurrentAddressGu />
          </option>
          <option value="서울특별시 강동구">{t('서울특별시_강동구')}</option>
          <option value="서울특별시 강남구">{t('서울특별시_강남구')}</option>
          <option value="서울특별시 영등포구">{t('서울특별시_영등포구')}</option>
          <option value="서울특별시 은평구">{t('서울특별시_은평구')}</option>
          <option value="서울특별시 강북구">{t('서울특별시_강북구')}</option>
          <option value="서울특별시 종로구">{t('서울특별시_종로구')}</option>
          <option value="서울특별시 중구">{t('서울특별시_중구')}</option>
          <option value="서울특별시 용산구">{t('서울특별시_용산구')}</option>
          <option value="서울특별시 동작구">{t('서울특별시_동작구')}</option>
          <option value="서울특별시 성북구">{t('서울특별시_성북구')}</option>
          <option value="서울특별시 서대문구">{t('서울특별시_서대문구')}</option>
          <option value="서울특별시 도봉구">{t('서울특별시_도봉구')}</option>
          <option value="서울특별시 노원구">{t('서울특별시_노원구')}</option>
          <option value="서울특별시 동대문구">{t('서울특별시_동대문구')}</option>
          <option value="서울특별시 마포구">{t('서울특별시_마포구')}</option>
          <option value="서울특별시 성동구">{t('서울특별시_성동구')}</option>
          <option value="서울특별시 중랑구">{t('서울특별시_중랑구')}</option>
          <option value="서울특별시 구로구">{t('서울특별시_구로구')}</option>
          <option value="서울특별시 금천구">{t('서울특별시_금천구')}</option>
          <option value="서울특별시 서초구">{t('서울특별시_서초구')}</option>
          <option value="서울특별시 관악구">{t('서울특별시_관악구')}</option>
          <option value="서울특별시 강서구">{t('서울특별시_강서구')}</option>
          <option value="서울특별시 광진구">{t('서울특별시_광진구')}</option>
          <option value="서울특별시 양천구">{t('서울특별시_양천구')}</option>
          <option value="서울특별시 송파구">{t('서울특별시_송파구')}</option>
        </select>
      </div>
      {search.areaNm && (
        <>
          <div>
            <select name="sopt" onChange={onChange} value={search?.sopt}>
              <option value="ALL">{t('통합검색')}</option>
              <option value="TITLE">{t('식당명')}</option>
              <option value="TEL">{t('연락처')}</option>
              <option value="ADDRESS">{t('도로명 주소')}</option>
              <option value="CATEGORY">{t('업종명')}</option>
            </select>
            <input
              type="text"
              name="skey"
              value={search.skey}
              onChange={onChange}
            />
          </div>
          <SearchButton>{t('검색')}</SearchButton>
        </>
      )}
    </FormBox>
  );
};

export default React.memo(SearchBox);
