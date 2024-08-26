import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';

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

const SearchBox = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <select name="areaNm" onChange={onChange}>
          <option>- {t('지역_선택')} -</option>
          <option value="GANGDONG">{t('서울특별시 강동구')}</option>
          <option value="GANGNAM">{t('서울특별시 강남구')}</option>
          <option value="YEONGDEONGPO">{t('서울특별시 영등포구')}</option>
          <option value="EUNPYEONG">{t('서울특별시 은평구')}</option>
          <option value="GANGBUK">{t('서울특별시 강북구')}</option>
          <option value="JONGNO">{t('서울특별시 종로구')}</option>
          <option value="JUNG">{t('서울특별시 중구')}</option>
          <option value="YONGSAN">{t('서울특별시 용산구')}</option>
          <option value="DONGJAK">{t('서울특별시 동작구')}</option>
          <option value="SEONGBUK">{t('서울특별시 성북구')}</option>
          <option value="SEODAEMUN">{t('서울특별시 서대문구')}</option>
          <option value="DOBONG">{t('서울특별시 도봉구')}</option>
          <option value="NOWON">{t('서울특별시 노원구')}</option>
          <option value="DONGDAEMUN">{t('서울특별시 동대문구')}</option>
          <option value="MAPO">{t('서울특별시 마포구')}</option>
          <option value="SEONGDONG">{t('서울특별시 성동구')}</option>
          <option value="JUNGNANG">{t('서울특별시 중랑구')}</option>
          <option value="GURO">{t('서울특별시 구로구')}</option>
          <option value="GEUMCHEON">{t('서울특별시 금천구')}</option>
          <option value="SEOCHO">{t('서울특별시 서초구')}</option>
          <option value="GWANAK">{t('서울특별시 관악구')}</option>
          <option value="GANGSEO">{t('서울특별시 강서구')}</option>
          <option value="GWANGJIN">{t('서울특별시 광진구')}</option>
          <option value="YANGCHEON">{t('서울특별시 양천구')}</option>
          <option value="SONGPA">{t('서울특별시 송파구')}</option>
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
      <SearchButton>{t('검색하기')}</SearchButton>
    </FormBox>
  );
};

export default React.memo(SearchBox);
