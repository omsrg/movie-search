import InfoItem from './InfoItem';
import { MovieDetailType } from 'types/MovieDetail';

interface Props {
	movie: MovieDetailType;
}

const InfoSection: React.VFC<Props> = ({ movie }) => {
	return (
		<div className='mt-5 divide-y'>
			<InfoItem label='Director' item={movie.Director} color='sky' />
			<InfoItem label='Writers' item={movie.Writer} color='sky' />
			<InfoItem label='Stars' item={movie.Actors} color='sky' />
			<InfoItem label='Awards' item={movie.Awards} color='gray' />
			<InfoItem label='Released' item={movie.Released} color='gray' />
			<InfoItem label='Box Office' item={movie.BoxOffice} color='gray' />
			<InfoItem label='Languange' item={movie.Language} color='gray' />
		</div>
	);
};
export default InfoSection;
