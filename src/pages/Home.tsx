import { useEffect } from 'react';
import MovieList from 'components/MovieList';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchMoviesByTitle } from 'features/movies/movieSlice';
import Pagination from 'components/ui/Pagination';
import Spinner from 'components/ui/Spinner';

const Home = () => {
	const dispatch = useAppDispatch();
	const searchTerm = localStorage.getItem('searchTerm')
		? localStorage.getItem('searchTerm')
		: 'spider-man';

	const { page } = useAppSelector((state) => state.movieApp);
	const { movies, isLoading } = useAppSelector((state) => state.movieApp);

	useEffect(() => {
		dispatch(fetchMoviesByTitle({ term: searchTerm as string, page }));
		window.scrollTo(0, 0);
	}, [dispatch, searchTerm, page]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<MovieList />
			{parseInt(movies.totalResults) > 10 && <Pagination />}
		</>
	);
};
export default Home;
