import { Link } from 'react-router-dom';
import { MovieType } from 'types/Movies';

interface Props {
	movie: MovieType;
}

const MovieCard = ({ movie }: Props) => {
	const imageUrl =
		movie.Poster !== 'N/A'
			? movie.Poster
			: 'https://res.cloudinary.com/gryffin/image/upload/v1647971129/movie-search/anika-mikkelson-dWYjy9zIiF8-unsplash_opt1nw.jpg';

	return (
		<Link to={`/detail/${movie.imdbID}`}>
			<div className='card'>
				<div className='h-[300px]'>
					<img src={imageUrl} alt={movie.Title} className='h-full w-full object-cover' />
				</div>
				<h1 className='h4 my-4 px-2 text-base'>
					{movie.Title} <span className=''>({movie.Year})</span>
				</h1>
			</div>
		</Link>
	);
};
export default MovieCard;
