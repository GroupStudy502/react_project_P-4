import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import InputBox from '../../commons/components/InputBox';
import { MidButton } from '../../commons/components/Buttons';
import MessageBox from '../../commons/components/MessageBox';
import fontSize from '../../styles/fontSize';
import loginimage from '../../images/loginimage.png';

const { small } = fontSize;

const FormBox = styled.form`
  width: 350px;
  margin: 0 auto;
  padding-bottom: 5px;
  font-size: 13px;
  input {
    width: 250;
    margin-bottom: 10px;
  }
`;
const LinkBox = styled.div`
  width: 350px;
  height: 40px;
  margin: 10px auto 0;
  display: flex;
  border: 1px solid #d5d5d5;
  border-left: 0;
  border-right: 0;

  a {
    flex-grow: 1;
    width: 0;
    text-align: center;
    padding: 10px 0;
    font-size: 15px;

    svg {
      vertical-align: middle;
    }
  }
`;

const LoginImage = styled.img`
  width: 300px;
  height: 250px;
  margin-left: 20px;
  display: block;
`;

const LoginForm = ({ form, onSubmit, onChange, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <FormBox onSubmit={onSubmit} autoComplete="off">
        <Link to="/">
          <FiHome
            style={{ 
              width: '100%',
              height: '30px',
              right: '-170px',
              position: 'fixed',
            }}
          />
        </Link>
        <LoginImage src={loginimage} />

        <InputBox
          type="text"
          name="email"
          value={form.email ?? ''}
          placeholder={t('이메일')}
          onChange={onChange}
        />
        <MessageBox messages={errors.email} color="danger" />

        <InputBox
          type="password"
          name="password"
          value={form.password ?? ''}
          placeholder={t('비밀번호')}
          onChange={onChange}
        />
        <MessageBox messages={errors.password} color="danger" />

        <MidButton type="submit" color="primary">
          {t('로그인')}
        </MidButton>

        <MessageBox messages={errors.global} color="danger" />
      </FormBox>
      <LinkBox>
        <Link to="/member/find_id">{t('아이디_찾기')}</Link>
        <Link to="/member/find_pw">{t('비밀번호_찾기')}</Link>
        <Link to="/member/join">{t('회원가입')}</Link>
      </LinkBox>
    </>
  );
};

export default React.memo(LoginForm);
