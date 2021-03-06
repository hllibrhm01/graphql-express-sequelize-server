import Sequelize from 'sequelize';
import databaseConnection from '../../setup/databaseConnection';
import postModel from './post/postModel';

const models = {
  Post: databaseConnection.import('./post/postModel'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;
