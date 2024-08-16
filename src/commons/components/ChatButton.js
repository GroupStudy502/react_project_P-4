import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const {  normal } = fontSize;
const commonStyle = css`
  position: fixed;;
  right: 100px;
  bottom: 30px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ChatButton = styled.button`
  font-size: ${normal};
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
