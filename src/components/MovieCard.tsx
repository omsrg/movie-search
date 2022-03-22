import { Link } from 'react-router-dom';
import { MovieType } from 'types/Movies';
import { DEFAULT_IMAGE } from 'utils/apiMovies';

interface Props {
	movie: MovieType;
}

const MovieCard = ({ movie }: Props) => {
	const imageUrl = movie.Poster !== 'N/A' ? movie.Poster : DEFAULT_IMAGE;

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
