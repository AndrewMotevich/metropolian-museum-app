import axios, { AxiosResponse } from 'axios';
import { painting } from '../types';

export default class PaintingService {
  static async searchPaintings(qstring: string) {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&isOnView=true&q=${qstring}`
    );
    return response;
  }
  static async getPaintings(id: number): Promise<AxiosResponse<painting>> {
    return await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
  }
}
