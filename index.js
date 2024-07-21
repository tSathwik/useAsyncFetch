import { useState, useEffect } from "react";

function useAsyncFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      setIsFetching(true);
      try {
        const response = await fetch(url);
        const res = await response.json();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isFetching, error };
}

export default useAsyncFetch;
