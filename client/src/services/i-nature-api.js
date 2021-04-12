import axios from 'axios';

//search for all species matching the query
export const searchSpecie = async (query) => {
  const response = await axios.get(
    `https://api.inaturalist.org/v1/taxa?q=${query}&rank=species`
  );
  return response.data.results;
};

//search for an specific specie matching the id in the api
export const searchSpecieById = async (api_id) => {
    const response = await axios.get(
      `https://api.inaturalist.org/v1/taxa/${api_id}`
    );
    return response.data.results;
  };