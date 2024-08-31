import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';
import UserInfoContext from '../../member/modules/UserInfoContext'; // 유저정보
import { Link } from 'react-router-dom'; // 페이지이동
import Myprofile from './Myprofile';

const FormBox = styled.form`
  width: 300px;
  margin: 0 auto;
  dl {
    display: flex;
    align-items: center;

    dt {
      width: 80px;
    }
    dd {
      margin-top: 5px;
      flex-grow: 1;
    }
  }

  dl + dl {
    margin-top: 10px;
  }
`;

const Btn = styled.div`
  width: 300px;
  margin: 20px 20px 0 450px;
  text-align: center;
  position: absolute;

  .editbtn {
    width: 80px;
    height: 40px;
    border-radius: 60px;
    margin-right: 30px;
    background-color: black;
    border: white;
    color: white;
    font-size: 18px;
  }

  .exitbtn {
    width: 80px;
    height: 40px;
    border-radius: 60px;
    margin-right: 30px;
    background-color: black;
    border: white;
    color: white;
    font-size: 18px;
  }
`;

const MyInfo = ({ onSubmit, onChange, form }) => {
  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const { t } = useTranslation();

  return (
    <div className="mypage-main">
      <Myprofile />
      <div className="modify">
        <FormBox autoComplete="off" onSubmit={onSubmit}>
          <dl>
            <dt>{t('이메일')}</dt>
            <dd>{userInfo.email}</dd>
          </dl>
          <dl>
            <dt>{t('비밀번호')}</dt>
            <dd>
              <InputBox
                type="text"
                value={form?.password}
                onChange={onChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>{t('비밀번호확인')}</dt>
            <dd>
              <InputBox
                type="text"
                value={form?.confirmPassword}
                onChange={onChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>{t('이름')}</dt>
            <dd>{userInfo.userName}</dd>
          </dl>
          <dl>
            <dt>{t('휴대전화')}</dt>
            <dd>
              <InputBox type="text" value={form?.mobile} onChange={onChange} />
            </dd>
          </dl>
        </FormBox>

        <Btn>
          <button
            type="submit"
            className="editbtn"
          >
            {t('수정하기')}
          </button>

          <Link to="/mypage">
            <button className="exitbtn">{t('나가기')}</button>
          </Link>
        </Btn>
      </div>
    </div>
  );
};
export default React.memo(MyInfo);
