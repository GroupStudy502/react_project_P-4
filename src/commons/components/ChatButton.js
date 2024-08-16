import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const {  small } = fontSize;
const commonStyle = css`
  position: absolute;
  right: 100px;
  bottom: 20px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ChatButton = styled.button`
  font-size: ${small};
  height: 30px;
  ${commonStyle}

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
  ${({ width }) => css`
    width: ${width}px;
  `}
`;
