import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet } from '../apis/apiInfo';
import apiCancel from '../../reservation/apis/apiCancel';
import { useParams, useNavigate } from 'react-router-dom';
import ReservationItem from '../components/ReservationItem';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ViewWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
`;

const ReservationViewContainer = ({ setPageTitle }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { orderNo } = useParams();
  useEffect(() => {
    setLoading(true);

    apiGet(orderNo).then((item) => {
      setPageTitle(`${item.rname} ${t('예약_정보')}`);
      setItem(item);
    });

    setLoading(false);
  }, [orderNo, setPageTitle]);

  // 예약 취소 처리
  const onCancel = useCallback(
    (orderNo) => {
      if (!window.confirm(t('정말_취소하겠습니까?'))) {
        return;
      }

      (async () => {
        try {
          const res = await apiCancel(orderNo);
          setItem(res);
        } catch (err) {
          console.error(err);
        }
      })();
    },
    [t],
  );


  if (loading || !item) {
    return <Loading />;
  }

  return (
    <ViewWrapper>
      <ReservationItem item={item} onCancel={onCancel} />
    </ViewWrapper>
  );
};
export default React.memo(ReservationViewContainer);
