import React, { useState, useRef, useContext } from 'react';
import FileUpload from '../../commons/components/FileUpload';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';
import UserInfoContext from '../../member/modules/UserInfoContext'; // 유저정보

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.form`
  dl {
    display: flex;
    align-items: center;

    dt {
      width: 120px;
    }

    dd {
      flex-grow: 1;
    }
  }

  dl + dl {
    margin-top: 5px;
  }
`;

const MyInfo = ({ onSubmit }) => {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );

  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const { t } = useTranslation();
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      );
    }

    const InfoForm = ({}) => {};
  };

  return (
    <div className="mypage-main">
      <div className="myprofile">
        <Profile
          src={Image}
          style={{ margin: '20px' }}
          size={200}
          onClick={() => {
            fileInput.current.click();
          }}
        />
      </div>
      <input
        type="file"
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={onChange}
      />
      <FileUpload />
      <div className="modify">
        <FormBox autoComplete="off" onSubmit={onSubmit}>
          <tbody>
            <th>{t('이메일')}</th>
            <td>{userInfo.email}</td>
            <tr></tr>
            <th>{t('비밀번호')}</th>
            <td>
              <InputBox
                type="text"
                value="form.password" // 로그인할 때 비밀번호값을 끌고오기
              />
            </td>
            <tr></tr>
            <th>{t('이름')}</th>
            <td>{userInfo.userName}</td>
            <tr></tr>
            <th>{t('휴대전화')}</th>
            <td>
              <InputBox
                type="text" // 수정가능
              />
            </td>
          </tbody>
        </FormBox>
      </div>
    </div>
  );
};
export default React.memo(MyInfo);
