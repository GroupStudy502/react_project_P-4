import React from 'react';
import styled from 'styled-components';

const InfoInputBox = styled.input`
  border: 1px solid #ff3d00;
  margin: 10px 10px 10px 20px; //상/우/하/좌 
  height: 50px;
  width: 89%;
  padding: 0 10px;
  border-radius: 3px;
`;

export default React.memo(InfoInputBox);
