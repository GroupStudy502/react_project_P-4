import React, { memo } from 'react';
import styled from 'styled-components';
import chunsik from '../../images/chunsik.png';
import { GrAddCircle } from 'react-icons/gr';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';

const Box = styled.div`
  width: 160px;
  height: 160px;
  background-color: white;
  border-color: black;
  border: 3px solid;
  border-radius: 20px;
  margin: 20px auto 0 auto;
  position: relative;

  .profile-img .box {
    position: relative;
    display: inline-block;
  }

  .box {
    width: 30px;
    box-sizing: 30px;
    display: none;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
  .icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: block;
    bottom: 3px;
    right: 3px;
  }
`;

const MypageList = () => {
  return (
    <div className="profile-img">
      <Box>
        <GrAddCircle className="icon" />
        <img src={chunsik} />
      </Box>
      <ButtonGroup width={450}>
        <BigButton type="submit" color="light" onClick={alert}>
          회원정보수정
        </BigButton>
        <BigButton type="submit" color="dark" onClick={alert}>
          리뷰작성
        </BigButton>
        <BigButton type="submit" color="dark" onClick={alert}>
          찜한내역
        </BigButton>
      </ButtonGroup>
    </div>
  );
};

export default React.memo(MypageList);
