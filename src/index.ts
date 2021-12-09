import express from "express";
import { Sequelize } from "sequelize/dist";
import { blogPost } from "./DataLayer/Models/BlogPost";
import { blogRoutes } from "./routes/blog";
import cors from "cors";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.get("/v1", (req, res) => {
	res.send("testtesttes");
});
app.use(blogRoutes);
app.listen(4000);

const DATABASE: string = process.env.DATABASE || "";
const USER: string = process.env.USER || "";
const PASSWORD: string = process.env.PASSWORD?.toString() || "";

export const sequelize: Sequelize = new Sequelize(
	`postgres://postgres:milk123@127.0.0.1:5432/dvdb`
);

try {
	sequelize.authenticate();
	blogPost(sequelize);
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
