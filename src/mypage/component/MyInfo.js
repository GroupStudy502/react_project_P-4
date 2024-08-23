import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';
import UserInfoContext from '../../member/modules/UserInfoContext'; // 유저정보
import { useNavigate } from 'react-router-dom'; // 페이지이동
import Myprofile from './Myprofile';

const FormBox = styled.form`
  th {
    display: flex;
    align-items: center;

    td {
      width: 120px;
    }

    tr {
      flex-grow: 1;
    }
  }
`;

const MyInfo = ({ onSubmit }) => {
  let navigate = useNavigate();
  navigate('/mypage');

  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const { t } = useTranslation();

  return (
    <div className="mypage-main">

      <Myprofile />
      <div className="modify">
        <FormBox autoComplete="off" onSubmit={onSubmit}>
          <tbody>
            <th>{t('이메일')}</th>
            <td>{userInfo.email}</td>
            <tr></tr>
            <th>{t('비밀번호')}</th>
            <td>
              <InputBox type="text" value="form.password" />
            </td>
            <tr></tr>
            <th>{t('이름')}</th>
            <td>{userInfo.userName}</td>
            <tr></tr>
            <th>{t('휴대전화')}</th>
            <td>
              <InputBox type="text" />
            </td>
            <tr></tr>
            <th>{t('활동 지역')}</th>
            <td>
              <InputBox type="text"></InputBox>
            </td>
          </tbody>
        </FormBox>
        <div className="btn">
          <button type="submit" className="editbtn">
            {t('수정하기')}
          </button>

          <button
            onClick={() => {
              navigate('/mypage');
            }}
          >
            {t('나가기')}
          </button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(MyInfo);
