import { Link } from 'react-router-dom';
import { MovieType } from '../types/Movies';

interface Props {
	movie: MovieType;
}

const MovieCard = ({ movie }: Props) => {
	const imageUrl = movie.Poster !== 'N/A' ? movie.Poster : '/asset/my-image.jpg';

	return (
		<Link to={`/detail/${movie.imdbID}`}>
			<div className='card'>
				<div className='h-[300px]'>
					<img src={imageUrl} alt={movie.Title} className='h-full w-full object-cover' />
				</div>
				<h4 className='my-4 px-2 text-base'>
					{movie.Title} <span className=''>({movie.Year})</span>
				</h4>
			</div>
		</Link>
	);
};
export default MovieCard;
