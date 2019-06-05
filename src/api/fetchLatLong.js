import { geocodeUrl } from "./utilities";

export const fetchLatLong = (zip) => {
  const googleKey = process.env.REACT_APP_GOOGLE_KEY;
  return fetch(`${geocodeUrl}${zip}&key=${googleKey}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to find coordinates')
      } else {
        return response.json()
      }
    })
    .then(result => result.results[0].geometry.location)
}