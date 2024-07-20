import React from "react";
import useAsyncFetch from "../src/useAsyncFetch";

const UsageExample = () => {
  const { data, isFetching, error } = useAsyncFetch(
    "https://api.example.com/data"
  );

  if (isFetching) return <p>Data is being fetched...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UsageExample;
