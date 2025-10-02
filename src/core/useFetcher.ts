import { useEffect, useState } from "react";

interface useFetcherObject<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMsg: string | undefined;
}

export function useFetcher<T>(url: string): useFetcherObject<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetcher() {
      setIsLoading(true);
      setIsError(false);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQ4MWVlZDdjMzExNTU3ODhhMjc2NDYwOTE0YjA0YSIsIm5iZiI6MTc1ODUzNjI2Ny4wMzEwMDAxLCJzdWIiOiI2OGQxMjI0YjE2NTNkODdhZmU3YTQ4OWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9S6IJ86EdnP1ohGTNvg7lp3oxyOnQf58bxg-dZfwAK8",
        },
      };
      try {
        const result = await fetch(url, options);
        const dataResult: T = await result.json();

        setData(dataResult);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        setErrorMsg("Erreur");
      }
    }

    fetcher();
  }, [url]);

  return { data, isLoading, isError, errorMsg };
}
