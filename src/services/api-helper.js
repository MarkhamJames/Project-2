import axios from 'axios';

export const getMovies = async function () {
  const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${endpoint}`, {
    
  })
  return response.data;
}