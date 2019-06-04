import { googleKey, googleRoot } from "./utilities";

export const fetchDistance = (origin, destination) => {  return fetch(`${googleRoot}distancematrix/json?origins=${origin.lat},${origin.lng}&destinations=${destination.lat},${destination.long}&units=imperial&key=${googleKey}`)
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to find distance')
      } else {
        return response.json()
      }
    })
    .then(result => result.rows[0].elements[0].distance.text)
}