import React, { useEffect, useState, useCallback} from 'react';
import Loading from '../../commons/components/Loading';
import { apiGet } from '../apis/apiInfo';
import { useParams } from 'react-router-dom';

const ViewContainer = ({setPageTitle}) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const { rstrId } = useParams();

    useEffect(() => {
        apiGet(rstrId)
            .then(item => {
                setPageTitle(item.rstrNm);
                setItem(item);
            });

            setLoading(false);
    }, [rstrId, setPageTitle]);

    if (loading) {
        return <Loading />;
    }

    return <></>;
};

export default React.memo(ViewContainer);