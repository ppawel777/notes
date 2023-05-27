import { useEffect, useState } from 'react';
import axios from 'axios';

const useResponseData = (category, params_id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState()

  const getData = async (category, id) => {
    setIsLoading(true)
    try {
      const { data } = await axios(`https://rickandmortyapi.com/api/${category}/${id}/`);
      setData(data)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData(category, params_id)
  },[category, params_id])

  return {
    data,
    isLoading
  }
}

export default useResponseData;
