import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchMoviesById, removeMovieDetail } from 'features/movies/movieSlice';

import Spinner from 'components/ui/Spinner';
import MovieSummary from 'components/MovieDetail/MovieSummary';
import MovieInfo from 'components/MovieDetail/MovieInfo';
import MoviePoster from 'components/MovieDetail/MoviePoster';
import BackButton from 'components/ui/BackButton';

const MovieDetail = () => {
	const { imdbID } = useParams();

	const dispatch = useAppDispatch();
	const { movieDetail, isLoading } = useAppSelector((state) => state.movieApp);

	useEffect(() => {
		dispatch(fetchMoviesById(imdbID as string));
		window.scrollTo(0, 0);

		return () => {
			dispatch(removeMovieDetail());
		};
	}, [dispatch, imdbID]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<BackButton />
			<MovieSummary className='my-10 grid lg:grid-cols-[60%_40%]'>
				<MovieInfo movie={movieDetail} className='p-4 ' />
				<MoviePoster
					title={movieDetail.Title}
					poster={movieDetail.Poster}
					className='order-first mx-auto flex w-full max-w-lg justify-center md:p-4 lg:order-last lg:max-h-[30rem] lg:w-80'
				/>
			</MovieSummary>
		</>
	);
};
export default MovieDetail;
