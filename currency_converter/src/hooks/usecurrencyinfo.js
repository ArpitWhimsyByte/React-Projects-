import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );

        const result = await res.json();
        setData(result.rates);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCurrency();
  }, [fromCurrency]);

  return data;
}

export default useCurrencyInfo;