import { useEffect, useState } from 'react';
import axios from 'axios';

const useResponseDataList = (category, page) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const getData = async (category, page) => {
    setLoading(true)
    setError('')
    try {
      const { data } = await axios({
        url: `https://rickandmortyapi.com/api/${category}`,
        params: { page }
      });
      setHasMore(page !== data.info.pages)
      setData((prev) => [...prev, ...data.results])
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(category, page)
  }, [category, page])

  return {
    data,
    loading,
    error,
    hasMore,
  }
}

export default useResponseDataList;
