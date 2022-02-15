// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const warehousesUsers = sequelizeClient.define('warehouses_users', {
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (warehousesUsers as any).associate = function (models: any): void {
    // Define associations here
    const { users, warehouses } = models;

    warehousesUsers.belongsTo(users);
    warehousesUsers.belongsTo(warehouses);
    // See https://sequelize.org/master/manual/assocs.html
  };

  return warehousesUsers;
}
