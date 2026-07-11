import { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData(res[currency]);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [currency]);

    return data;
}

export default UseCurrencyInfo;