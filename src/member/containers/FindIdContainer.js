import React, { useState, useCallback } from 'react';
import FindIdForm from '../components/FindIdForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../commons/libs/apiRequest';
import { SmallButton } from '../../commons/components/Buttons';


const FindIdContainer = () => {
  // 양식 데이터
  const [form, setForm] = useState({
    userName: '',
    mobile: '',
  });

  const [userId, setUserId] = useState('');
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false; // 에러 유무

      /* 데이터 검증 - 필수 항목 체크 S */
      const requiredFields = {
        userName: t('회원명을_입력하세요.'),
        mobile: t('휴대폰 번호를_입력하세요.'),
      };

      for (const [field, msg] of Object.entries(requiredFields)) {
        if (
          !form[field] ||
          (typeof form[field] === 'string' && !form[field].trim())
        ) {
          _errors[field] = _errors[field] || [];
          _errors[field].push(msg);
          hasErrors = true;
        }
      }

      /* 데이터 검증 - 필수 항목 체크 E */

      setErrors(_errors);

      if (hasErrors) {
        // 검증 실패이면 로그인 처리 X
        return;
      }

      try {
        // API 요청 처리
        const res = await apiRequest('/member/find_id', 'POST', form);
        if (res.status === 200) {
          setUserId(res.data.data);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
        // 추가적인 에러 처리가 필요할 수 있습니다.
      }
    },
    [form, t], // 의존성 배열 추가
  );

  return userId ? (
    <div className="find_id">
      <h2>{t('찾은_이메일')}</h2>
      <div className="email"><h2>{userId} 입니다.</h2></div>
      <div className="button">
    
      <SmallButton type="submit" color="primary">
        {t('아이디_다시찾기')}
      </SmallButton>
      </div>
    </div>
  ) : (
    <FindIdForm
      form={form}
      errors={errors}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default React.memo(FindIdContainer);
