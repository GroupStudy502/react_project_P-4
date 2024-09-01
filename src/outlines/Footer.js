import React from 'react';
import styled from 'styled-components';
import fontSize from '../styles/fontSize';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FooterBox = styled.footer`
  min-height: 250px;
  vertical-align: baseline;
  border-top: 1px solid #d5d5d5;
  margin: 50px auto 0;
  
  div {
    display: inline-block;
    padding: 50px 200px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  h4 {
    font-size: ${fontSize.normal};
    font-weight: 500;
    color: #666;
    margin-bottom: 10px;
    line-height: 1.25;
  }

  p {
    font-size: ${fontSize.normal};
    color: #8f8f8f;
    margin-bottom: 10px;
    line-height: 1.25;
    word-break: break-word;
  }

  .footer-menu {
    font-size: ${fontSize.normal};
    font-weight: 500;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    border-top: 1px solid #aaa;
    padding: 10px 0;
  }

  .footer-menu a {
    color: #666;
    height: 16px;
  }

  .footer-menu span {
    color: #aaa;
    display: block;
    margin: 0 10px;
    height: 16px;
  }

  .jmc {
    color: #FF3D00;
    margin-top: 10px;
    margin-right: 3px;
    font-weight: 1000;
    font-size: ${fontSize.medium};
    line-height: 150%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <div>
          <h4>
            <strong>(주)점메추</strong>
          </h4>
          <address>
            <p>대표 :
              <span> 502호 2조</span>
            </p>
            <p>주소 :
              <span> 서울특별시 마포구 신촌로 176</span>
            </p>
            <p>사업자등록번호 :
              <span> 123-45-67890</span>
            </p>
            <p>통신판매업 신고번호 :
              <span> 2024-서울마포-0001호</span>
            </p>
            <p>이메일 :
              <span> service@jeommechu.co.kr</span>
            </p>
            <p>전화번호 :
              <span> 070-1234-5678</span>
            </p>
          </address>
          <p>
            (주)점메추는 통신판매중개자이며 통신판매의 당사자가 아닙니다. (주)점메추는 예약 및 구매 관련 통신판매업자가 제공하는 상품, 거래정보 및 거래 등에 대하여 책임을 지지 않습니다.
          </p>
          <nav className="footer-menu">
            <a href="/">서비스 이용 약관</a>
            <span>|</span>
            <a href="/">개인정보 처리방침</a>
            <span>|</span>
            <a href="/">위치정보 이용약관</a>
          </nav>
          <span className="jmc">JEOMMECHU</span>
        </div>
      </FooterBox>
    </FooterContainer>
  );
};

export default React.memo(Footer);