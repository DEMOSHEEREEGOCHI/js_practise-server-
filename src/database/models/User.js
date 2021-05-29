const Sequelize = require('sequelize');
const { sequelize } = require('..');

class User extends Sequelize.Model {}

User.init(
    {
        username : {
            type: Sequelize.STRING,
            unique: true,
            primaryKey: true,
            required: true
        },
        password : {
            type: Sequelize.STRING,
            required: true
        },
       
    },
    { sequelize: sequelize, underscored: true, modelName: 'user' }
);

module.exports = User
