import React, { memo } from 'react';
import styled from 'styled-components';
import chunsik from '../../images/chunsik.png';
import { GrAddCircle } from "react-icons/gr";


 const Box = styled.div`
    width: 160px;
    height: 160px;
    background-color: white;
    border-color: black;
    border: 3px solid;
    border-radius: 20px;
    display: flex;
   margin-top: 20px; margin-left: 300px;
  `;



const MypageList = () => {  




return  <div className="profile-img"><Box> <img src={chunsik} /> </Box> </div>

  
};

export default React.memo(MypageList);
