import React, { useState, useRef, useContext } from 'react';
import FileUpload from '../../commons/components/FileUpload';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';
import UserInfoContext from '../../member/modules/UserInfoContext'; // 유저정보
import { MidButton } from '../../commons/components/Buttons';
import { useNavigate } from 'react-router-dom'; // 페이지이동

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
