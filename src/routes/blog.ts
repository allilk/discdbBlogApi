import express from "express";
import {
	getAllPosts,
	getPost,
	newPost,
} from "../DataLayer/Controllers/BlogPost";

const router = express.Router();

export const blogRoutes = [
	router.get("/api/blog", getAllPosts),
	router.post("/api/blog", newPost),
	router.get("/api/blog/:postId", getPost),
];
