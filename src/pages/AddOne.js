import React, { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};

function AddOne() {
  const { response, error } = useFetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  if (response === null) {
    return <div>loading...</div>;
  }
  if (error !== null) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <img src={response.message} />
    </div>
  );
}

export default AddOne;
