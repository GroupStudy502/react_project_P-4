import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet } from '../apis/apiInfo';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../kakaoapi/KakaoMap';
import itemImage from '../components/itemImage';
import ItemDescription from '../components/ItemDescription';
import ItemImage from '../components/itemImage';
import styled from 'styled-components';
import { MidButton } from '../../commons/components/Buttons';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ItemTabmenu from '../components/ItemTabmenu';
import FloatingBar from '../components/FloatingBar';



const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ViewContainer = ({ setPageTitle }) => {
  const { t } = useTranslation();
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
      </Wrapper>
      <ItemDescription item={item} />
      <ItemTabmenu item={item}/>
      
        <h3>{t('매장위치')}</h3>
        <KakaoMap {...mapOptions} />
        <div> {item.rstrRdnmAdr} / {item.rstrLnnoAdres}</div>
      
      <FloatingBar />
      
    </>
  );
};
export default React.memo(ViewContainer);
