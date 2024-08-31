import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';

const Wrapper = styled.div`
  background-color: #fdfdfd;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
`;

const Reservationinfo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff5722;
  border-bottom: 2px solid #ff5722;
  padding-bottom: 8px;
`;

const InfoSection = styled.dl`
  margin-bottom: 20px;

  dt {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 17px;
    color: #333;
  }

  dd {
    margin: 0 0 15px 0;
    font-size: 15px;
    color: #7E7E7E;
    font-weight: bold;

    &:last-child {
      margin-bottom: 0;
    }
  }

  div {
    margin-bottom: 3px;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PaymentMethod = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: ${(props) => (props.selected ? '#e0f7fa' : 'transparent')};

  &:hover {
    background-color: #e0f7fa;
    transform: translateY(-2px);
  }

  svg {
    margin-right: 10px;
    font-size: 20px;
    color: ${(props) => (props.selected ? '#00796b' : '#888')};
  }

  font-size: 16px;
  color: #333;
`;

const Price = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: #ff5722;
`;

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('ko-KR', options).format(new Date(dateString)).replace(/ /g, ' ');
};

const formatTime = (timeString) => {
  const [hour, minute] = timeString.split(':');
  return `${parseInt(hour, 10)}시 ${minute}분`;
};

const PaymentInfo = ({ payConfig, form, data, onPayMethod, payMethod }) => {
  const { t } = useTranslation();

  const payMethods = {
    CARD: t('신용카드'),
    DirectBank: t('계좌이체'),
    VBank: t('가상계좌'),
  };

  return (
    <Wrapper>
      <Reservationinfo>{t('식당_정보')}</Reservationinfo>
      <InfoSection>
        <dt>{t('식당명')}</dt>
        <dd>{data?.rstrNm}</dd>
      </InfoSection>
      <InfoSection>
        <dt>{t('식당_주소')}</dt>
        <dd>{data?.rstrRdnmAdr}</dd>
      </InfoSection>
      <InfoSection>
        <dt>{t('식당_연락처')}</dt>
        <dd>{data?.rstrTelNo}</dd>
      </InfoSection>

      <Reservationinfo>{t('예약자_정보')}</Reservationinfo>
      <InfoSection>
        <dt>{t('예약자명')}</dt>
        <dd>{form?.name}</dd>
      </InfoSection>
      <InfoSection>
        <dt>{t('예약_날짜')}</dt>
        <dd>{formatDate(form?.rDate)}</dd>
      </InfoSection>
      <InfoSection>
        <dt>{t('예약_시간')}</dt>
        <dd>{formatTime(form?.rTime)}</dd>
      </InfoSection>
      <InfoSection>
        <dt>{t('예약인원')}</dt>
        <dd>{form?.persons}명</dd>
      </InfoSection>

      <Reservationinfo>{t('결제하기')}</Reservationinfo>
      <InfoSection>
        <dt>{t('결제수단')}</dt>
        <dd>
          <PaymentMethods>
            {payConfig.payMethods.map((m) => (
              <PaymentMethod
                key={m}
                selected={payMethod === m}
                onClick={() => onPayMethod(m)}
              >
                {payMethod === m ? (
                  <MdOutlineRadioButtonChecked />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
                {payMethods[m]}
              </PaymentMethod>
            ))}
          </PaymentMethods>
        </dd>
      </InfoSection>
      
      <InfoSection>
        <dt>{t('예약금액')}</dt>
        <Price>
          {payConfig?.price?.toLocaleString()} {t('원')}
        </Price>
      </InfoSection>
    </Wrapper>
  );
};

export default React.memo(PaymentInfo);
