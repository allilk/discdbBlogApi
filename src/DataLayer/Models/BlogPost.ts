import { Sequelize, DataTypes } from "sequelize/dist";

export const blogPost = (connection: Sequelize) => {
	return connection.define(
		"post",
		{
			identifier: {
				type: DataTypes.TEXT,
				primaryKey: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			body: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			createdBy: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{ schema: "blog" }
	);
};
