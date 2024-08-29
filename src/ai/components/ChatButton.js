import styled, { css } from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { extraBig } = fontSize;
const commonStyle = css`
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 2px 2px 5px #555;
`;

export const ChatButton = styled.button`
  font-size: ${ extraBig };
  height: 70px;
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
