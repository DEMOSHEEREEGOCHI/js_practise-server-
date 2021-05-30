const Sequelize = require('sequelize');
const { sequelize } = require('..');
const ToDo = require('./ToDo');

class User extends Sequelize.Model {}

User.init(
    {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4
        },
        username : {
             type: Sequelize.STRING,
            unique: true,
            required: true
        },
        password : {
            type: Sequelize.STRING,
            required: true
        },
      
    },
    { sequelize: sequelize, underscored: true, modelName: 'user' }
);


User.hasMany(ToDo,{
    foreignKey: 'userId'
});
ToDo.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = User
