import React, { useEffect, useState, useCallback, useRef } from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet, apiReview } from '../apis/apiInfo';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../kakaoapi/KakaoMap';
import ItemImage from '../components/ItemImage';
import ItemDescription from '../components/ItemDescription';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ItemTabmenu from '../components/ItemTabmenu';
import FloatingBarContainer from './FloatingBarContainer';

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

const ViewContainer = ({ setPageTitle }) => {
  const { t } = useTranslation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapOptions, setMapOptions] = useState({ height: '300px', zoom: 3 });
  const [reviews, setReviews] = useState({});
  const [page, setPage] = useState(1); 
  const viewRef = useRef(null);
  
  const { rstrId } = useParams();

  useEffect(() => {
    setLoading(true);

    (async() => {
      try{
        const item = await apiGet(rstrId);
        
      
        setPageTitle(item.rstrNm);
        setItem(item);
        
          const position = { lat: item.rstrLa, lng: item.rstrLo };
          setMapOptions((opt) => {
            const options = item.rstrLa
              ? { ...opt, center: position, marker: position }
              : { ...opt, address: item.rstrRdnmAdr };
    
            return options;
          });
      
      } catch (err) {
        console.error(err);
      }
    })();
    setLoading(false);
  }, [rstrId, setPageTitle]);

  useEffect(() => {
    (async() => {
      try {
        const res = await apiReview(rstrId, page);
        setReviews(res);
      } catch (err) {
        console.error(err);
      }
      
    })();
  }, [rstrId, page]);
  
  const onPageClick = useCallback((page) => setPage(page), []);

  const onShowImage = useCallback((imageUrl) => {
    console.log('이미지 주소', imageUrl);
  }, []);

  if (loading || !item) {
    return <Loading />;
  }

  return (
    <ViewWrapper ref={viewRef}>
      <Wrapper>
        {item?.images?.length && <ItemImage images={item.images} />}
      </Wrapper>
      <ItemDescription item={item} />
      <Seperator/>
      <ItemTabmenu item={item} reviews={reviews} onPageClick={onPageClick} />
      <Seperator/>
      
        <h3>{t('매장위치')}</h3>
        <KakaoMap {...mapOptions} />
        <div> {item.rstrRdnmAdr} / {item.rstrLnnoAdres}</div>
      <Seperator/>
      <FloatingBarContainer item={item} viewRef={viewRef}/>
      
    </ViewWrapper>
  );
};
export default React.memo(ViewContainer);
