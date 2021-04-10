import axios from 'axios';

export const searchSpecie = async (query) => {
  const response = await axios.get(
    `https://api.inaturalist.org/v1/taxa?q=${query}&rank=species`
  );
  return response.data.results;
};

export const searchSpecieById = async (id) => {
    const response = await axios.get(
      `https://api.inaturalist.org/v1/taxa/${id}`
    );
    return response.data.results;
  };