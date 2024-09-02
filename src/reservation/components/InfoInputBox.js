import React from 'react';
import styled from 'styled-components';

const MessageBox = styled.input`
  border: 1px solid #ff3d00;
  margin: 10px 0px 10px 0px; 
  height: 50px;
  width: 100%;
  padding: 0 10px;
  border-radius: 3px;
  font-weight: bold;
`;

export default React.memo(MessageBox);
