import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet } from '../apis/apiInfo';
import { useParams } from 'react-router-dom';
import ReservationItem from '../components/ReservationItem';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ViewWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
`;

const Seperator = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 8px;
  background-color: #ececec;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ReservationViewContainer = ({ setPageTitle }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { orderNo } = useParams();
  useEffect(() => {
    setLoading(true);

    apiGet(orderNo).then((item) => {
      setPageTitle(`${item.rname} ${t('예약_정보')}`);
      setItem(item);
    });

    setLoading(false);
  }, [orderNo, setPageTitle]);

  if (loading || !item) {
    return <Loading />;
  }

  return (
    <ViewWrapper>
      <ReservationItem item={item} />
      <Seperator />
      <Seperator />
    </ViewWrapper>
  );
};
export default React.memo(ReservationViewContainer);
