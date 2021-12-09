import { Request, Response } from "express";

import { sequelize } from "../..";
import { blogPost } from "../Models/BlogPost";
import randomstring from "randomstring";

const generateIdentifier = () => {
	const identifier = randomstring.generate(7);
	const db = blogPost(sequelize);

	db.findOne({ where: { identifier } }).then((result) => {
		if (result !== null) {
			return generateIdentifier();
		}
	});

	return identifier;
};

export const getAllPosts = async (req: Request, res: Response) => {
	const db = blogPost(sequelize);

	const maxLimit = 100;
	const page = parseInt(req.query.page as string) || 1;
	const limit =
		parseInt(req.query.limit as string) > maxLimit
			? maxLimit
			: parseInt(req.query.limit as string) || 10;
	const offset = (page - 1) * limit;

	const posts = await db.findAll({
		limit,
		offset,
		order: [["createdAt", "DESC"]],
	});

	res.send({
		page,
		posts,
	});
};

export const getPost = async (req: Request, res: Response) => {
	const db = blogPost(sequelize);
	const { postId: identifier } = req.params;

	const post = await db.findOne({ where: { identifier } });

	res.send({ post });
};

export const newPost = async (req: Request, res: Response) => {
	const db = blogPost(sequelize);
	const identifier = generateIdentifier();

	const { title, body } = req.body;

	const post = await db.create({
		title,
		body,
		createdBy: "milk",
		identifier,
	});

	res.send(post);
};
