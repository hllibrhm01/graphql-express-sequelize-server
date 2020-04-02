export default (sequelize, DataTypes) => sequelize.define('blogpost', {
  post_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  post_title: {
    type: DataTypes.STRING,
  },
  post: {
    type: DataTypes.STRING,
  },
});
