import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.omdbapi.com',
});

export const DEFAULT_IMAGE =
	'https://res.cloudinary.com/gryffin/image/upload/v1647971129/movie-search/anika-mikkelson-dWYjy9zIiF8-unsplash_opt1nw.jpg';
