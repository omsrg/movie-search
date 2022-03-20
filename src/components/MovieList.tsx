import { useAppSelector } from '../App/hooks';
import MovieCard from './MovieCard';
import Spinner from './Spinner';

const MovieList = () => {
	const { movies, isLoading, errorMessage } = useAppSelector((state) => state.movieApp);
	// const series = useAppSelector((state) => state.movies.shows);

	// console.log(movies);

	const searchTerm = localStorage.getItem('searchTerm');

	let renderMovies;
	let renderSeries;

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

	// renderSeries =
	// 	series.Response === 'True' ? (
	// 		series.Search.map((serie, index) => <MovieCard key={index} movie={serie} />)
	// 	) : (
	// 		<div>
	// 			<p>{series.Error}</p>
	// 		</div>
	// 	);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className='mov-wrapper'>
			{movies.Response === 'True' && <span>Results for {searchTerm}</span>}
			<div className='movie-list my-5'>
				<h2 className='mb-6'>Movies</h2>
				<div className='container grid grid-cols-container gap-4'>{renderMovies}</div>
			</div>
			<div className='movie-list my-5'>
				<h2 className='mb-6'>Shows</h2>
				<div className='container grid grid-cols-container gap-4'>{renderSeries}</div>
			</div>
		</div>
	);
};
export default MovieList;
