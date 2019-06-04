import { locationCleaner } from "./api/cleaners";

export const origin = {
  lat: 38.9119463, 
  lng: -94.4136213 
}

export const destination = { 
  lat: "39.1952922", 
  long: "-94.6817269" 
}

export const distance = '18.3 mi';

export const distanceResult = {
  rows: [
    {
      elements: [
        {
          distance: {
            text: distance
          }
        }
      ]
    }
  ]
}


export const fetchDistanceURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=38.9119463,-94.4136213&destinations=39.1952922,-94.6817269&units=imperial&key=AIzaSyDHKnndIp7I8oymrxO0sDwpQUdZvfN1sqc"

export const latLongResult = {
  results: [
    {
      geometry: {
        location: origin
      }
    }
  ]
}


export const fetchLatLongURL = "https://maps.googleapis.com/maps/api/geocode/json?address=64081&key=AIzaSyDHKnndIp7I8oymrxO0sDwpQUdZvfN1sqc"

export const locations = [
  {
    title: "Neighborhood Health",
    link: "https://gettested.cdc.gov/gettested_redirect/21952",
    id: "tag:hivtest.org,2000-03-20:/search/Detailx.asp?id=21952",
    streetAddress: "617 S 8th St",
    locality: "Nashville",
    region: "TN",
    postalCode: "37206-3819",
    telephone: "(615)-227-3000",
    categories: "",
    point: {
      lat: "36.1678930",
      long: "-86.7547047"
    },
    updated: "2019-02-08T17:19:32.0000000-05:00"
  },
  {
    title: "Street Works",
    link: "https://gettested.cdc.gov/gettested_redirect/110792",
    id: "tag:hivtest.org,2008-05-21:/search/Detailx.asp?id=110792",
    streetAddress: "520 Sylvan St",
    locality: "Nashville",
    region: "TN",
    postalCode: "37206",
    telephone: "(615)-259-7676",
    categories: "",
    point: {
      lat: "36.1665114",
      long: "-86.7605114"
    },
    updated: "2018-08-02T18:05:30.0000000-04:00"
  }
];

export const locationsResult = {
  services: [
    {
      providers: locations
    }
  ]
}

export const cleanLocations = locations.map(location => locationCleaner(location))

export const fetchLocationsURL = "https://cors-anywhere.herokuapp.com/https://locator.hiv.gov/data?lat=38.9119463&long=-94.4136213&distance=10"

export const contact = '+18168682142';

export const contacts = [contact, contact]

export const message = 'Test message.'

export const sendMessageOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ to: contact, message })
}

export const resolvedMessages = [{ ok: true }, { ok: true }];

export const cleanLocation = {
  title: 'Neighborhood Health',
  link: 'https://gettested.cdc.gov/gettested_redirect/21952',
  id: '21952',
  address: '617 S 8th St;Nashville, TN 37206-3819',
  telephone: '(615)-227-3000',
  point: { lat: '36.1678930', long: '-86.7547047' }
}

export const details = {
  additionalNotes: "Test",
  diagnosis: "Herpes",
  timeFrame: "year"
}