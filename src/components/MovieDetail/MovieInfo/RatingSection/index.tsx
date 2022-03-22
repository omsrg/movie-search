import { AiOutlineStar } from 'react-icons/ai';
import { Rating } from 'types/MovieDetail';

interface Props {
	ratings: Rating[];
}

const RatingSection: React.VFC<Props> = ({ ratings }) => {
	return (
		<div className='mt-10 flex flex-wrap md:space-x-8'>
			{ratings?.map((rating, idx) => (
				<div key={idx} className='mb-3 mr-6 flex sm:mr-0'>
					<div className='flex items-center'>
						<AiOutlineStar className='h-8 w-8 text-blue-600' />
					</div>
					<div className='ml-2 flex flex-col'>
						<span className='text-xl font-semibold text-green-500'>{rating.Value}</span>
						<span className='text-sm text-dark-200'>{rating.Source}</span>
					</div>
				</div>
			))}
		</div>
	);
};
export default RatingSection;
