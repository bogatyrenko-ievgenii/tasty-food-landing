import { APIKEY } from './apikey';

export let URI = `https://pixabay.com/api/?image_type=photo&orientation=vertical&per_page=4&key=${APIKEY}&q=`;


async function fetchData(URI) {
  const getData = await fetch(URI);

  if (!getData.ok) {
    throw new Error(`Could not fetch. Status is - ${getData.status}.`);
  }

  return await getData.json();
}

const getImages = (name, imgArr = []) => {

  fetchData(`${URI}${name}`)
    .then(res =>
      res.hits.forEach(hit => {
        imgArr.push(hit.largeImageURL);

        return hit.largeImageURL;
      }),
    )
    .catch(error => {
      throw new Error(`Something went wrong because - ${error}`);
    });

  return imgArr;
};

export default getImages;
