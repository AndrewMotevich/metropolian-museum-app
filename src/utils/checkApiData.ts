import { painting } from 'types';

export function checkApiData(object: painting) {
  return object.primaryImageSmall && object.primaryImage;
}
