const Sequelize = require('sequelize');
const { sequelize } = require('..');
const User = require('./User');

class ToDo extends Sequelize.Model { }

ToDo.init(
    {
        id: {
            type: Sequelize.DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4
        },
        userId: {
            allowNull: true,
            type: Sequelize.DataTypes.UUID,
            references: {
                model: "users",
                key: 'id',
                
            }
        },
        title: {
            type: Sequelize.STRING,
            defaultValue: 'Title',
        },
        description: {
            type: Sequelize.STRING,
            defaultValue: 'Description',
        },
        isComplete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },

    },
    { sequelize: sequelize, underscored: true, modelName: 'todo' }
);


module.exports = ToDo
