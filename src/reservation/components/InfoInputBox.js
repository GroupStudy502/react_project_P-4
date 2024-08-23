import React from 'react';
import styled from 'styled-components';

const InfoInputBox = styled.input`
  border: 1px solid #ff3d00;
  height: 40px;
  //width: 60%;
  padding: 0 10px;
  border-radius: 3px;
`;

export default React.memo(InfoInputBox);
