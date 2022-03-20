import { useEffect } from 'react';
import MovieList from '../components/MovieList';
import { useAppDispatch, useAppSelector } from '../App/hooks';
import { fetchMoviesByTitle } from '../features/movies/movieSlice';
import Pagination from '../components/Pagination';

const Home = () => {
	const dispatch = useAppDispatch();
	const searchTerm = localStorage.getItem('searchTerm')
		? localStorage.getItem('searchTerm')
		: 'spider-man';

	const { page } = useAppSelector((state) => state.movieApp);
	const { movies } = useAppSelector((state) => state.movieApp);

	useEffect(() => {
		dispatch(fetchMoviesByTitle({ term: searchTerm as string, page }));
	}, [dispatch, searchTerm, page]);

	return (
		<>
			<MovieList />
			{parseInt(movies.totalResults) > 10 && <Pagination />}
		</>
	);
};
export default Home;
