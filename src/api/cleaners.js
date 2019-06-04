export const locationCleaner = (location) => {
  const { title, link, id, streetAddress, locality, region, postalCode, telephone, point} = location;
  const shortId = id.split('=')[1];
  const address = `${streetAddress};${locality}, ${region} ${postalCode}`;
  return {
    title,
    link,
    id: shortId,
    address,
    telephone,
    point
  }
}