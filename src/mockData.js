export const origin = {
  lat: 38.9119463, 
  lng: -94.4136213 
}

export const destination = { 
  lat: "39.1952922", 
  long: "-94.6817269" 
}

export const distanceResult = {
  rows: [
    {
      elements: [
        {
          distance: {
            text: '18.3 mi'
          }
        }
      ]
    }
  ]
}

export const distance = '18.3 mi'

export const fetchDistanceURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=38.9119463,-94.4136213&destinations=39.1952922,-94.6817269&units=imperial&key=AIzaSyDHKnndIp7I8oymrxO0sDwpQUdZvfN1sqc"