import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { AiFillStar, AiFillCalendar } from 'react-icons/ai';
// import { HiThumbUp } from 'react-icons/hi';
// import { BiFilm } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../App/hooks';
import { fetchMoviesById, removeMovieDetail } from '../features/movies/movieSlice';
import Spinner from '../components/Spinner';

const MovieDetail = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { imdbID } = useParams();

	const dispatch = useAppDispatch();
	const { movieDetail, isLoading } = useAppSelector((state) => state.movieApp);
	console.log('detail', movieDetail);

	useEffect(() => {
		dispatch(fetchMoviesById(imdbID as string));

		return () => {
			dispatch(removeMovieDetail());
		};
	}, [dispatch, imdbID]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className='flex justify-evenly py-10'>
			<div className='left'>
				<h1 className='text-'>{movieDetail.Title}</h1>
				<div className=' '>
					<ul className='flex space-x-5'>
						<li className='flex flex-col'>
							<span>Year</span>
							<span>{movieDetail.Year}</span>
						</li>
						<li className='flex flex-col'>
							<span>Rated</span>
							<span>{movieDetail.Rated}</span>
						</li>
						<li className='flex flex-col'>
							<span>Duration</span>
							<span>{movieDetail.Runtime}</span>
						</li>
					</ul>
				</div>
				<p className='mt-5 text-base'>{movieDetail.Plot}</p>

				<div className='info'>
					<div className=''>
						<span className='inline-block w-[100px] py-2 font-semibold'>Director</span>
						<span className=''>{movieDetail.Director}</span>
					</div>
					<div className=''>
						<span className='inline-block w-[100px] py-2 font-semibold'>Stars</span>
						<span>{movieDetail.Actors}</span>
					</div>
					<div className=''>
						<span className='inline-block w-[100px] py-2 font-semibold'>Genres</span>
						<span>{movieDetail.Genre}</span>
					</div>
					<div className=''>
						<span className='inline-block w-[100px] py-2 font-semibold'>Languange</span>
						<span>{movieDetail.Language}</span>
					</div>
					<div className=''>
						<span className='inline-block w-[100px] py-2 font-semibold'>Awards</span>
						<span>{movieDetail.Awards}</span>
					</div>
				</div>
			</div>

			<div className='r'>
				<img src={movieDetail.Poster} alt={movieDetail.Title} />
			</div>
		</div>
	);
};
export default MovieDetail;
