import axios from 'axios';

//search for all species matching the query
export const searchSpecie = async(query) => {
    const response = await axios.get(
        `https://api.inaturalist.org/v1/taxa?q=${query}&is_active=true&taxon_id=3&rank=species%2Csubspecies`
    );
    return response.data.results;
};

//search for an specific specie matching the id in the api
export const searchSpecieById = async(api_id) => {
    const response = await axios.get(
        `https://api.inaturalist.org/v1/taxa/${api_id}`
    );
    return response.data.results;
};



// https: //api.inaturalist.org/v1/taxa?q=kiwi&is_active=true&taxon_id=3&rank=species%2Csubspecies

//     taxa ? q = kiwi &
//     is_active = true &
//     taxon_id = 3 &
//     rank = species % 2 Csubspecies
// rank = species, Csubspecies