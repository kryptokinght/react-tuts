import axios from 'axios';

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=minanshu1234";

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); //fetches all the posts as a promise

	return {
		type: FETCH_POSTS,
		payload: request
	}; //goes to reducer
}

export function createPost(blog, callback) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, blog)
		.then(() => {
			callback();
		});

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}}`);

	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id, callback) {
	console.log("dele");
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}}`)
		.then(() => {
			callback();
		});

	return {
		type: DELETE_POST,
		payload: id
	};
}
