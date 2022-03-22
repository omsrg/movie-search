import { useAppSelector } from 'app/hooks';
import MovieCard from './MovieCard';

const MovieList = () => {
	const { movies, errorMessage } = useAppSelector((state) => state.movieApp);

	const searchTerm = localStorage.getItem('searchTerm');

	let renderMovies;

	renderMovies =
		movies.Response === 'True' ? (
			movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)
		) : (
			<div
				className='relative rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700'
				role='alert'
			>
				<span className='block sm:inline'>{movies.Error || errorMessage}</span>
			</div>
		);

	return (
		<div className='mb-20'>
			{movies.Response === 'True' && (
				<span className='text-xs uppercase text-dark-200 sm:text-base'>{searchTerm}</span>
			)}
			<div className='my-5'>
				<h1 className='h2 mb-6'>Movies</h1>
				<div className=' grid grid-cols-custom1 justify-center gap-5 gap-y-10 xs:grid-cols-custom2 sm:grid-cols-custom3 sm:gap-8'>
					{renderMovies}
				</div>
			</div>
		</div>
	);
};
export default MovieList;
