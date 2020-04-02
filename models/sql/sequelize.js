import Sequelize from 'sequelize';
import path from 'path';

// eslint-disable-next-line import/no-dynamic-require
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'));

export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
