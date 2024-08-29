import React, { useCallback, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { save } from '../apis/apiMyinfo';
import { useParams, useNavigate } from 'react-router-dom';
import UserInfoContext from '../../member/modules/UserInfoContext';
import { getMember } from './a';

const Form = styled.form``;

const MyInfoSaveContainer = () => {
  const { seq } = useParams();
  const { states: userInfo } = useContext(UserInfoContext);
  const userForm = userInfo;
  delete userForm.password;
  const [form, setForm] = useState(userForm);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        console.log('유입되나요');
        const res = await getMember(seq);
        res.mode = 'save';

        setForm(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [seq]);

  const onChange = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form],
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 유효성 검사 - 필수 항목 검증 S */
      const requiredFields = {
        password: t('비밀번호를_입력해주세요'),
        confirmPassword: t('비밀번호를_확인주세요'),
        mobile: t('핸드폰번호를_입력해주세요'),
      };
      const _errors = {};
      let hasErrors = false;
      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }
      /* 유효성 검사 - 필수 항목 검증 E */

      // 검증 실패시에는 처리 X
      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      /* 데이터 저장 처리 S */

      (async () => {
        try {
          const { locationAfterWriting, seq } = form;
          const res = form.mode === 'save' ? await save(seq, form) : [];

          const url = locationAfterWriting === 'info' ? `/mypage/info` : `[]`;
          navigate(url, { replace: true });
        } catch (err) {
          setErrors(err.message);
        }
      })();

      /* 데이터 저장 처리 E */
    },
    [t, form, navigate],
  );

  return (
    <Form form={form} onChange={onChange} onSubmit={onSubmit} errors={errors} />
  );
};

export default React.memo(MyInfoSaveContainer);
