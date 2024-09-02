import styled from 'styled-components';
import { color } from '../../styles/color';
const { dark } = color;

export const OuterBox = styled.div`
  max-width: 900px;
  min-width: 700px;
  padding: 25px 50px;
  margin: 50px auto;
`;

export const MainOuterBox = styled.div`
  margin: 0 auto 50px;
`;

export const ListOuterBox = styled.div`
  max-width: 900px;
  min-width: 700px;
  box-shadow: 0 0 20px #c9c9c9;
  padding: 25px 50px;
  margin: 50px auto;
  border-radius: 3px;
`;

export const ChatOuterBox = styled.div`
  max-width: 900px;
  min-width: 700px;
  padding: 50px;
  margin: 50px auto;
  border-radius: 20px;
  box-shadow: 2px 2px 5px ${dark};
`;

export const OuterChat = styled.div`
  width: 500px;
  margin: auto;
`;