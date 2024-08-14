import React, { useEffect, useState, useCallback} from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet } from '../apis/apiInfo';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../kakaoapi/KakaoMap';

const ViewContainer = ({setPageTitle}) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mapOptions, setMapOptions] = useState({ height: '400px', zoom: 3});

    const { rstrId } = useParams();

    useEffect(() => {
        apiGet(rstrId)
            .then(item => {
                setPageTitle(item.rstrNm);
                setItem(item);
                    const position = { lat: item.rstrLa, lng: item.rstrLo};
                setMapOptions((opt) => {
                   const options = item.rstrLa 
                   ? {...opt, center: position, marker: position} 
                   : {...opt, address: item.rstrRdnmAdr};

                   return options;
                });
            });

            setLoading(false);
    }, [rstrId, setPageTitle]);

    if (loading) {
        return <Loading />;
    }

    return <>
        <KakaoMap {...mapOptions} />
    </>;

};

export default React.memo(ViewContainer);