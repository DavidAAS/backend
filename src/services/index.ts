import { Application } from '../declarations';
import users from './users/users.service';
import warehouses from './warehouses/warehouses.service';
import warehousesUsers from './warehouses_users/warehouses_users.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(warehouses);
  app.configure(warehousesUsers);
}
