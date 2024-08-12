import { Place, PlaceId } from '../../data';

export class PlaceService {
  async find(placeId: PlaceId): Promise<Place.Type> {
    try {
      return await Promise.resolve({ id: placeId, ...Place[placeId] });
    } catch (err) {
      return Promise.reject(new Error('Failed to get Archetype'));
    }
  }
}
