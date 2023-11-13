import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetcher = () => {

    const [datas, setDatas] = useState(null);
    const [fetching, setFetching] = useState(false);

    function fetchData() {
        axios.get("https://dummyjson.com/products").then((response) => {
            setDatas(response.data);
            setFetching(true);
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {
               fetching ? datas !== null && <p>{JSON.stringify(datas)}</p> : <p>Loading...</p>
            }
        </div>
    )
}

export default DataFetcher;