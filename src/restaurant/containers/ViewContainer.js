import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet } from '../apis/apiInfo';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../kakaoapi/KakaoMap';
import itemImage from '../components/itemImage';
import ItemDescription from '../components/ItemDescription';
import ItemImage from '../components/itemImage';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ViewContainer = ({ setPageTitle }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapOptions, setMapOptions] = useState({ height: '300px', zoom: 3 });

  const { rstrId } = useParams();

  useEffect(() => {
    setLoading(true);

    apiGet(rstrId).then((item) => {
      setPageTitle(item.rstrNm);
      setItem(item);
      const position = { lat: item.rstrLa, lng: item.rstrLo };
      setMapOptions((opt) => {
        const options = item.rstrLa
          ? { ...opt, center: position, marker: position }
          : { ...opt, address: item.rstrRdnmAdr };

        return options;
      });
    });

    setLoading(false);
  }, [rstrId, setPageTitle]);

  const onShowImage = useCallback((imageUrl) => {
    console.log('이미지 주소', imageUrl);
  }, []);

  if (loading || !item) {
    return <Loading />;
  }

  return (
    <>
      <Wrapper>
        {item?.images?.length && <ItemImage images={item.images} />}
        <ItemDescription item={item} />
      </Wrapper>
      <KakaoMap {...mapOptions} />
      <div>{item.rstrRdnmAdr} / {item.rstrLnnoAdres}</div>
    </>
  );
};
export default React.memo(ViewContainer);