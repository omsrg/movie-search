import { AiFillStar } from 'react-icons/ai';

interface Props {
	rating: string;
	votes: string;
}

const ImdbRating = ({ rating, votes }: Props) => {
	return (
		<div className='w-max-content mt-5'>
			<div className='text-sm font-semibold tracking-widest text-dark-200 sm:text-base'>
				IMDb RATING
			</div>
			<div className='w-max-content flex flex-col justify-center'>
				<div className='flex flex-col'>
					<div className='flex items-center'>
						<div className='text-amber-400'>
							<AiFillStar className='h-7 w-7' />
						</div>
						<span className='text-xl font-bold sm:text-2xl'>{rating}</span>
					</div>
					<div className=''>
						<span className='text-xs text-dark-200'>{votes} votes</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ImdbRating;
