import { Sequelize, DataTypes } from "sequelize/dist";

export const model = (connection: Sequelize) => {
    return connection.define('blog_post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_by: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        created_time: {
            type: DataTypes.TIME
        }
    })
}