import app from '../../src/app';

describe('\'warehouses\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouses');
    expect(service).toBeTruthy();
  });
});
