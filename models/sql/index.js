import Sequelize from 'sequelize';
import databaseConnection from '../../setup/databaseConnection';

import postModel from './post/postModel';

const models = {
  Posts: databaseConnection.import('./post/postModel'),
  // PostModel: databaseConnection(postModel),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;
