import React, { memo, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import chunsik from '../../images/chunsik.png';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import FileUpload from '../../commons/components/FileUpload';


const mypage_main = styled.div`
  width: 160px;
  height: 160px;
  background-color: white;
  border-color: black;
  border: 3px solid;
  border-radius: 20px;
  margin: 20px auto 0 auto;
  position: relative;

`;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  align-content: center;
`;


const MypageList = () => {
  const [ Image , setImage ] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  
  const fileInput = useRef(null)

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
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      );
    }
  };

  const { t } = useTranslation();


  return (
    
    <div className="mypage-main">
      <div className="myprofile"></div>
      <Profile
  src= {Image}
  style={{margin: '20px'}}
  size={200}
  onClick={()=> {fileInput.current.click()}} />
      
      <input
        type="file"
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={onChange}
      />
    <FileUpload />

      <ButtonGroup width={400} height={300}>
        <BigButton type="submit" color="dark" onClick={alert}>
          {t('회원정보수정')}
        </BigButton>
        <BigButton type="submit" color="dark" onClick={alert}>
          {t('리뷰작성')}
        </BigButton>
        <BigButton type="submit" color="dark" onClick={alert}>
          {t('찜한내역')}
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
