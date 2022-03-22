import { MovieDetailType } from 'types/MovieDetail';
import ImdbRating from './ImdbRating';
import PlotSection from './PlotSection';
import BasicSection from './BasicSection';
import InfoSection from './InfoSection';
import RatingSection from './RatingSection';

interface Props {
	movie: MovieDetailType;
	className: string;
}

const MovieInfo: React.VFC<Props> = ({ movie, className }) => {
	return (
		<div className={className}>
			<h1 className='mb-1'>{movie.Title}</h1>
			<BasicSection year={movie.Year} rated={movie.Rated} runtime={movie.Runtime} />
			<ImdbRating rating={movie.imdbRating} votes={movie.imdbVotes} />
			<PlotSection plot={movie.Plot} />
			<InfoSection movie={movie} />
			<RatingSection ratings={movie.Ratings} />
		</div>
	);
};
export default MovieInfo;
