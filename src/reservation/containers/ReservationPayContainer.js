import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { BigButton } from '../../commons/components/Buttons';
import PaymentInfo from '../components/PaymentInfo';

const returnUrl = `${window.location.origin}/payment/process`;
const closeUrl = `${window.location.origin}/payment/close`;
const ReservationPayContainer = ({ payConfig, form, data, setPageTitle }) => {
  const initialPayMethod =
    payConfig?.payMethods?.length > 0 ? payConfig.payMethods[0] : '';
  const { t } = useTranslation();
  const [payMethod, setPayMethod] = useState(initialPayMethod);
  {/* 결제 페이지 관련
  useEffect(() => {
    setPageTitle(data.rstrNm + ' ' + t('예약결제하기'));
  }, [t, data, setPageTitle]);

  */}

  useEffect(() => {
    setPageTitle(data.rstrNm + ' ' + t('예약_확인하기'));
  }, [t, data, setPageTitle]);

  const onPayProcess = useCallback(() => {
    window.INIStdPay.pay('inicisForm');
  }, []);

  const onPayMethod = useCallback((payMethod) => {
    setPayMethod(payMethod);
  }, []);

  return (
    <>
      <PaymentInfo
        payConfig={payConfig}
        payMethod={payMethod}
        form={form}
        data={data}
        onPayMethod={onPayMethod}
      />
      {/*
      <BigButton type="button" color="jmt" onClick={onPayProcess}>
        {t('결제하기')}
      </BigButton>
      */}
      <form id="inicisForm" method="POST">
        <input type="hidden" name="version" value="1.0" />
        <input type="hidden" name="gopaymethod" value="VBank" />
        <input type="hidden" name="mid" value={payConfig.mid} />
        <input type="hidden" name="oid" value={payConfig.oid} />
        <input type="hidden" name="price" value={payConfig.price} />
        <input type="hidden" name="timestamp" value={payConfig.timestamp} />
        <input type="hidden" name="use_chkfake" value="Y" />
        <input type="hidden" name="signature" value={payConfig.signature} />
        <input
          type="hidden"
          name="verification"
          value={payConfig.verification}
        />
        <input type="hidden" name="mKey" value={payConfig.mkey} />
        <input type="hidden" name="currency" value="WON" />
        <input
          type="hidden"
          name="goodname"
          value={`${data.rstrNm}/${form.person}인 예약`}
        />
        <input type="hidden" name="buyername" value={form.name} />
        <input type="hidden" name="buyertel" value={form.mobile} />
        <input type="hidden" name="buyeremail" value={form.email} />
        <input type="hidden" name="returnUrl" value={returnUrl} />
        <input type="hidden" name="closeUrl" value={closeUrl} />
        <input type="hidden" name="acceptmethod" value="below1000" />
      </form>
    </>
  );
};

export default React.memo(ReservationPayContainer);