import axios from 'axios';

export const getInfo = async function (endpoint) {
  const response = await axios.get(`https://ghibliapi.herokuapp.com/${endpoint}`, {
    
  })
  return response.data;
}

