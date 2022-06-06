import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setError(null);
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        if (err.name === "AbortError") {
          return;
        } else{
          setError(err.message);
          setIsPending(false);
        }
      })
    return () => abortController.abort();
  }, [])

  return { data, isPending, error };
}

export default useFetch