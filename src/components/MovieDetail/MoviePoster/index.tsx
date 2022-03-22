interface Props {
	title: string;
	poster: string;
	className: string;
}

const MoviePoster: React.VFC<Props> = ({ title, poster, className }) => {
	return (
		<div className={className}>
			<img
				src={poster !== 'N/A' ? poster : '/asset/my-image.jpg'}
				alt={title}
				className='w-full rounded-sm object-cover shadow-sm'
			/>
		</div>
	);
};
export default MoviePoster;
