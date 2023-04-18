import axios, { AxiosResponse } from 'axios';
import { painting } from '../types';

export default class PaintingService {
  static async searchPaintings(qstring: string) {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&isOnView=true&q=${qstring}`
    );
    return response;
  }
  static async searchPaintings1(qstring: string) {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&isOnView=true&q=${qstring}`
    );
    return response;
  }
  static async searchPaintings2(qstring: string) {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&isOnView=true&q=${qstring}`
    );
    return response;
  }
  static async searchPaintings3(qstring: string) {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&isOnView=true&q=${qstring}`
    );
    return response;
  }
  static async searchPaintings4(qstring: string) {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&isOnView=true&q=${qstring}`
    );
    return response;
  }
  static async searchPaintings5(qstring: string) {
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
  static async getPaintings1(id: number): Promise<AxiosResponse<painting>> {
    return await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
  }
  static async getPaintings2(id: number): Promise<AxiosResponse<painting>> {
    return await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
  }
  static async getPaintings3(id: number): Promise<AxiosResponse<painting>> {
    return await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
  }
  static async getPaintings4(id: number): Promise<AxiosResponse<painting>> {
    return await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
  }
}
