import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetcher = () => {

    const [datas, setDatas] = useState(null);
    const [fetching, setFetching] = useState(false);

    function fetchData() {
        setFetching(false);
        axios.get("https://dummyjson.com/products").then((response) => {
            setDatas(response.data);
            setFetching(true);
            console.log(response.data);
        }).catch((err) => {
            setDatas(err.message);
            setFetching(true);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div id="root">
            {
               fetching ? datas !== null && <p>{JSON.stringify(datas)}</p> : <h1>Loading...</h1>
            }
        </div>
    )
}

export default DataFetcher;