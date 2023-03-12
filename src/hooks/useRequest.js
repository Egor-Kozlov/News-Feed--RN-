import {useState} from 'react';

export default function useRequest(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeRequest = async url => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const dataResponse = await response.json();
      console.log('url: ', url);
      console.log('hookDataResponse: ', dataResponse);
      setData(dataResponse);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    makeRequest,
  };
}
