import React, { memo, useState, useRef } from 'react';
import FileUpload from '../../commons/components/FileUpload';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputBox from '../../commons/components/InputBox';

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  align-content: center;
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

  .terms-agree {
    text-align: center;
    margin: 15px 0;

    svg {
      font-size: 1.5rem;
      vertical-align: middle;
    }
  }
`;

const MyInfo = ({ onSubmit }) => {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );

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
              <tr>ddd</tr>
            </tbody>
          </FormBox>
        </div>
      </div>
    </div>
  );
};
export default React.memo(MyInfo);
