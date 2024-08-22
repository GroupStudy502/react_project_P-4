import React from 'react';
import { useContext, useState, useRef } from 'react';
import styled from 'styled-components';

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

const MyProfile = () => {
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );

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
    <div className="profile">
      <div>
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
    </div>
  );
};

export default React.memo(MyProfile);
