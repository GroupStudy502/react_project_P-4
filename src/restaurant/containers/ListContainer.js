import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import ItemsBox from "../components/ItemsBox";
import Pagination from "../../commons/components/Pagination";
import { apiList } from "../apis/apiInfo";


const ListContainer = () => {
        const [search, setSearch] = useState({});
        const [items, setItems] = useState([]);
        const [pagination, setPagination] = useState({});

    useEffect(() => {
        (async () => {
            try{
            const { items, pagination } = await apiList(search);
            setItems(items);
            setPagination(pagination);
        } catch (err) {
            console.err(err);
        }
    })();
     }, [search]);

    return(
        <>
            <SearchBox search={search} />
            <ItemsBox items={items} />
            <Pagination search={search} />
        </>
    );

};

export default React.memo(ListContainer);