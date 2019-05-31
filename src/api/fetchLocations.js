import { url } from "./utilities";

export const fetchLocations = (location, distance) => {
  const { lat, lng } = location
  const fullUrl = `${url}lat=${lat}&long=${lng}`
  const distanceURL = distance 
    ? `&distance=${distance}` 
    : '';
  return fetch(`${fullUrl}${distanceURL}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to find locations')
      } else {
        return response.json();
      }
    })
    .then(results => results.services[0].providers)
    .catch(error => console.log(error))
}