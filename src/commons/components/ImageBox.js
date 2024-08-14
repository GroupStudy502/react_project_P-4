import React from 'react';
import styled from 'styled-components';

export const ImageBox = styled.div`
  background: url('${({ url }) => url}') no-repeat center center;
  background-size: cover; //사이즈 박스에 고정
  width: ${({ width }) => width ?? '200px'}; //넓이 200px 고정
  height: ${({ height }) => height ?? '200px'};
`;
