import axios from 'axios';

//search for all species matching the query
export const searchLatLng = async (query) => {
  const { street, houseNumber, city } = query;
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${houseNumber}+${street}+${city}&format=geojson`
  );
  return response.data.features[0].geometry;
};
