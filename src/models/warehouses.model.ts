// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const warehouses = sequelizeClient.define('warehouses', {
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phones: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT({ length: 'long' }),
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (warehouses as any).associate = function (models: any): void {
    // Define associations here
    const { users, warehouses_users } = models;

    warehouses.belongsToMany(users, { through: warehouses_users });
    // See https://sequelize.org/master/manual/assocs.html
  };

  return warehouses;
}
