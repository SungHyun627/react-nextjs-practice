import axios from 'axios';
import dotenv from 'dotenv';
export const baseUrl = 'https://bayut.p.rapidapi.com';

dotenv.config();

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': `${process.env.RapidAPIHost}`,
      'X-RapidAPI-Key': `${process.env.RapidAPIKey}`,
    },
  });
  return data;
};
