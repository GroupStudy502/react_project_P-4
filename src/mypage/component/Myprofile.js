import React from 'react';
import { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { SmallButton } from '../../commons/components/Buttons';
import { MdModeEdit } from 'react-icons/md';

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  position: relative;
  margin: 0 auto;
  
`;

const MyProfile = () => {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );

  const fileInput = useRef(null);

  const location = useLocation(); // 현재 경로 가져오기

  const handleClick = () => {
    if (location.pathname !== '/mypage') {
      fileInput.current.click();
    }
  };

  return (
    <div className="profile">
      <div>
        <Profile
          src={Image}
          onClick={handleClick}
        />

        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default React.memo(MyProfile);
