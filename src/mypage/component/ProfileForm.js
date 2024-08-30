import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';
import { MidButton } from '../../commons/components/Buttons';
import MessageBox from '../../commons/components/MessageBox';

const FormBox = styled.form``;

const ProfileForm = ({ form, errors, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>{form?.email}</dd>
      </dl>

      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputBox
            type="password"
            name="password"
            value={form?.password}
            onChange={onChange}
          />
          {errors?.password && (
            <MessageBox color="danger" messages={errors.password} />
          )}
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <InputBox
            type="password"
            name="confirmPassword"
            value={form?.confirmPassword}
            onChange={onChange}
          />
          {errors?.confirmPassword && (
            <MessageBox color="danger" messages={errors.confirmPassword} />
          )}
        </dd>
      </dl>
      <dl>
        <dt>{t('이름')}</dt>
        <dd>
          <InputBox
            type="text"
            name="userName"
            value={form?.userName}
            onChange={onChange}
          />
          {errors?.userName && (
            <MessageBox color="danger" messages={errors.userName} />
          )}
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <InputBox
            type="text"
            name="mobile"
            value={form?.mobile}
            onChange={onChange}
          />
          {errors?.mobile && (
            <MessageBox color="danger" messages={errors.mobile} />
          )}
        </dd>
      </dl>
      {errors?.global && <MessageBox color="danger" messages={errors.global} />}
      <MidButton type="submit" color="gray">
        {t('수정하기')}
      </MidButton>
    </FormBox>
  );
};

export default React.memo(ProfileForm);