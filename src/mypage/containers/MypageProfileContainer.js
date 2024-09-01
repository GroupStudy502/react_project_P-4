import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../../member/modules/UserInfoContext';
import ProfileForm from '../component/ProfileForm';
import ProfileImage from '../component/ProfileImage';
import { updateProfile } from '../apis/apiMypage';

const MypageProfileContainer = () => {
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);
  const initialForm = userInfo;
  delete initialForm.password;

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /**
       * 필수항목 검증
       * 1. 회원명(이름)
       * 2. 비밀번호(선택), 있는 경우 confirmPassword(필수), password, confirmPassword 일치여부
       */
      const requiredFields = {
        userName: t('회원명을_입력하세요'),
      };
      if (form?.password?.trim()) {
        requiredFields.confirmPassword = t('비밀번호를_확인하세요.');
      }

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] ?? [];

          _errors[field].push(message);
          hasErrors = true;
        }
      }

      // 비밀번호가 입력된 경우 비밀번호 확인 일치여부 체크
      if (!hasErrors && form.password !== form.confirmPassword) {
        _errors.confirmPassword = _errors.confirmPassword ?? [];
        _errors.confirmPassword.push(t('비밀번호가_일치하지_않습니다.'));
        hasErrors = true;
      }

      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 회원정보 수정 처리 S
      (async () => {
        try {
          const res = await updateProfile(form);
          // 회원 정보 수정 완료 후 -> context api 쪽 정보 업데이트
          // form 초기화, 마이페이지 메인으로 이동
          setUserInfo(res);
          const newForm = res;
          delete newForm.password;
          setForm(newForm);

          navigate('/mypage', { replace: true });
        } catch (err) {
          console.error(err);
          const messages = err.message.global
            ? err.message
            : { global: [err.message] };
          setErrors(messages);
        }
      })();
      // 회원정보 수정 처리 E
    },
    [t, form, navigate, setUserInfo],
  );

  const fileUploadCallback = useCallback(
    (files) => {
      if (files.length === 0) {
        return;
      }

      setForm((form) => ({ ...form, profileImage: files[0] }));
      setUserInfo((userInfo) => ({ ...userInfo, profileImage: files[0] }));
    },
    [setUserInfo],
  );

  const profileImage = form?.profileImage?.fileUrl;
  return (
    <>
      <ProfileImage
        gid={form?.gid}
        fileUploadCallback={fileUploadCallback}
        profileImage={profileImage}
      />
      <ProfileForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
};

export default React.memo(MypageProfileContainer);