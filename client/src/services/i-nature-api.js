import axios from 'axios';

//search for all species matching the query
export const searchSpecie = async(query, options) => {
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

//search for observations of an specific specie matching the id in the api
export const searchObservations = async(query, options) => {
    const response = await axios.get(
        `https://api.inaturalist.org/v1/observations?q=${query}&is_active=true&taxon_id=3&rank=species%2Csubspecies`
    );
    return response.data.results;
};


//search for observations
export const searchApi = async(query, options) => {
    const urlQuery = `&q=${query}`;
    const urlOptions = `&is_active=${options.is_active}&taxon_id=${options.taxon_id}&rank=${options.rank}&per_page=${options.per_page}&order=${options.order}&order_by=${options.order_by}&photos=${options.photos}`
    const url = `https://api.inaturalist.org/v1/${options.route}?` + urlOptions + urlQuery;
    console.log(url)
    const response = await axios.get(url);
    return response.data.results;
};



// https://api.inaturalist.org/v1/taxa/?taxon_id=3

// https: //api.inaturalist.org/v1/taxa?q=kiwi&is_active=true&taxon_id=3&rank=species%2Csubspecies

//     taxa ? q = kiwi &
//     is_active = true &
//     taxon_id = 3 &
//     rank = species % 2 Csubspecies
// rank = species, Csubspecies

// options: {
//             route: 'taxa',
//             q: null,
//             is_active: true,
//             taxon_id: 3,
//             rank: 'species%2Csubspecies',
//             per_page: 50,
//             order: 'desc',
//             order_by: 'created_at'
//           }