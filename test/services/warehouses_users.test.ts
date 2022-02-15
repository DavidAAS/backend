import app from '../../src/app';

describe('\'warehouses_users\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouses_users');
    expect(service).toBeTruthy();
  });
});
