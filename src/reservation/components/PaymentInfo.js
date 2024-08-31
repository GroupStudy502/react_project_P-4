import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';

const Wrapper = styled.div``;

const PaymentInfo = ({ payConfig, form, data, onPayMethod, payMethod }) => {
  const { t } = useTranslation();

  const payMethods = {
    CARD: t('신용카드'),
    DirectBank: t('계좌이체'),
    VBank: t('가상계좌'),
  };

  return (
    <Wrapper>
      <h2>{t('예약정보')}</h2>
      <dl>
        <dt>{t('식당정보')}</dt>
        <dd>
          <div>{data?.rstrNm}</div>
          <div>{data?.rstrRdnmAdr}</div>
          <div>{data?.rstrTelNo}</div>
        </dd>
      </dl>
      <dl>
        <dt>{t('예약자명')}</dt>
        <dd>{form?.name}</dd>
      </dl>
      <dl>
        <dt>{t('예약일시')}</dt>
        <dd>
          {form?.rDate} / {form?.rTime}
        </dd>
      </dl>
      <dl>
        <dt>{t('예약인원')}</dt>
        <dd>{form?.persons}명</dd>
      </dl>
      <dl>
        <dt>{t('예약금액')}</dt>
        <dd>
          {payConfig?.price?.toLocaleString()}
          {t('원')}
        </dd>
      </dl>
      <dl>
        <dt>{t('결제방법')}</dt>
        <dd>
          {payConfig.payMethods.map((m) => (
            <>
              <span onClick={() => onPayMethod(m)}>
                {payMethod === m ? (
                  <MdOutlineRadioButtonChecked />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
                {payMethods[m]}
              </span>
            </>
          ))}
        </dd>
      </dl>
    </Wrapper>
  );
};

export default React.memo(PaymentInfo);