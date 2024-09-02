import styled, { css } from 'styled-components';
import { buttonColor ,color} from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { big, medium, normal } = fontSize;
const { jmt } = color;


const commonStyle = css`
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
`;


export const SmallButton = styled.button`
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

export const MidButton = styled.button`
  font-size: ${medium};
  height: 40px;
  ${commonStyle}

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;

export const BigButton = styled.button`
  font-size: ${big};
  height: 45px;
  ${commonStyle}

  ${({ color }) =>
    buttonColor[color] &&
    css`
      background: ${buttonColor[color][0]};
      color: ${buttonColor[color][1]};
      border: 1px solid ${buttonColor[color][2]};
    `}
`;

export const SearchButton = styled.button`
  font-size: ${medium};
  height: 40px;
  ${commonStyle}

  border-radius: 3px;
  cursor: pointer;

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
`

export const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: 20px auto;

  button {
    width: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 5px;
  }
`;

export const jmtButton = styled.button`

`

export const BackButton = styled.button`
  font-size: ${medium};
  width: 120px;
  height: 40px;
  background-color:${jmt}; 
  color: white;
  border-color: white;
  margin: 0 auto;
  border-radius: 3px;
  display: block;

`;