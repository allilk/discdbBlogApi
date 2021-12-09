import express from "express";
import {
	getAllPosts,
	getPost,
	newPost,
} from "../DataLayer/Controllers/BlogPost";

const router = express.Router();

export const blogRoutes = [
	router.get("/api/blog/get", getAllPosts),
	router.post("/api/blog/new", newPost),
	router.get("/api/blog/:postId", getPost),
];
