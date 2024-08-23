import React from 'react';
import { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';



const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display : block;
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
          style={{ margin: '50px auto' }}
          size={200}
          onClick={handleClick}
        />
      </div>

      <input
        type="file"
        ref={fileInput}
        style={{ display: 'none' }}
        handleClick={handleClick}
      />
    </div>
  );
};

export default React.memo(MyProfile);
