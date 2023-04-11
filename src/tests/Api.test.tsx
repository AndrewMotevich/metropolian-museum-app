import PaintingService from '../api/PaintingService';

describe('API', () => {
  it('send search request to get objects', async () => {
    const response = await PaintingService.searchPaintings('Vincent');
    expect(response.data).toHaveProperty('total');
    expect(response.data).toHaveProperty('objectIDs');
  });
  it('send object request to get objects', async () => {
    const response = await PaintingService.getPaintings(436532);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('objectID');
    expect(response.data).toHaveProperty('primaryImage');
    expect(response.data).toHaveProperty('primaryImageSmall');
    expect(response.data).toHaveProperty('artistDisplayName');
    expect(response.data).toHaveProperty('artistDisplayBio');
    expect(response.data).toHaveProperty('artistNationality');
    expect(response.data).toHaveProperty('artistBeginDate');
    expect(response.data).toHaveProperty('artistEndDate');
    expect(response.data).toHaveProperty('objectDate');
    expect(response.data).toHaveProperty('objectName');
  });
});
