import axios from 'axios';

export const FETCH_POSTS = "fetch_posts";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=minanshu1234";

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}
