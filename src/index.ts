import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize/dist";

import { blogPost } from "./DataLayer/Models/BlogPost";
import { blogRoutes } from "./routes/blog";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/v1", (req, res) => {
	res.send("testtesttes");
});

app.use(blogRoutes);

app.listen(4000);

// Sequelize

const DATABASE: string = process.env.DATABASE || "";
const USER: string = process.env.USER || "";
const PASSWORD: string = process.env.PASSWORD || "";

export const sequelize: Sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
	host: "localhost",
	port: 5432,
	dialect: "postgres",
});

try {
	sequelize.authenticate();
	blogPost(sequelize);
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
