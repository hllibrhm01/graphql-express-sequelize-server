import Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const BlogPost = sequelize.define('blogpost', {
post_id: {
  type: Sequelize.STRING,
  primaryKey: true,
  unique: {
    args: true,
    msg: 'ID already in use!'
  }
},
post_title: {
  type: Sequelize.STRING,
  unique: {
    args: true,
    msg: 'Email address already in use!'
  }
},
post : {
  type: Sequelize.STRING,
},
post_date: {
  type: Sequelize.DATE,
},
createdAt: {
  type: Sequelize.DATE,
},
updatedAt: {
  type: Sequelize.DATE,
}
});
