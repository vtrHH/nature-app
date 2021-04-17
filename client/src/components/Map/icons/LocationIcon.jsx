import L from 'leaflet';
import locationIcon from './../assets/location-icon.png';

export const LocationIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [20, 36],
  iconAnchor: [10, 43],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});
