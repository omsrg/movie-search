import { Link } from 'react-router-dom';
import { MovieType } from '../types/Movies';

interface Props {
	movie: MovieType;
}

const MovieCard = ({ movie }: Props) => {
	return (
		<Link to={`/detail/${movie.imdbID}`}>
			<div className='h-full cursor-pointer bg-indigo-500'>
				<div className=''>
					<div className='card-top h-[300px]'>
						<img src={movie.Poster} alt={movie.Title} className='h-full w-full' />
					</div>
					<div className='p-4'>
						<h4 className='mb-4 text-xl'>{movie.Title}</h4>
						<p>{movie.Year}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
export default MovieCard;
