import { DEFAULT_IMAGE } from "utils/apiMovies";

interface Props {
	title: string;
	poster: string;
	className: string;
}

const MoviePoster: React.VFC<Props> = ({ title, poster, className }) => {
	return (
		<div className={className}>
			<img
				src={poster !== 'N/A' ? poster : DEFAULT_IMAGE}
				alt={title}
				className='w-full rounded-sm object-cover shadow-sm'
			/>
		</div>
	);
};
export default MoviePoster;
