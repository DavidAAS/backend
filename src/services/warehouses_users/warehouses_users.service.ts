// Initializes the `warehouses_users` service on path `/warehouses_users`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { WarehousesUsers } from './warehouses_users.class';
import createModel from '../../models/warehouses_users.model';
import hooks from './warehouses_users.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'warehouses_users': WarehousesUsers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/warehouses_users', new WarehousesUsers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('warehouses_users');

  service.hooks(hooks);
}
