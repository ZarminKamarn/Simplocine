export async function fetcher<T>(url: string): Promise<T | null> {
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
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Ca marche pas");
    return null;
  }
}
