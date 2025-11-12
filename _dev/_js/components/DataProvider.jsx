import React from "react";

import DataContext from "./DataContext";
import useSWR from "swr";
import Loader from "./Loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

function DataProvider({ api_url, refresh, message_empty, children }) {
    const { data, error, isLoading } = useSWR(api_url, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        refreshInterval: refresh ? refresh : 0,
    });

    if (error) return <div>Error</div>;
    if (isLoading) return <Loader />;
    if (Array.isArray(data) && data.length === 0) return <p>{message_empty ? message_empty : wp_core.i18n.no_data}</p>;

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataProvider;
