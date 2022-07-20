import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'fe03cf8c63msh86cb93d8a74dbd4p1a392fjsn70ad8ef3d625',
    },
  });
  return data;
};
