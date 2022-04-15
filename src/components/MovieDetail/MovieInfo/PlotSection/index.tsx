import { useState } from 'react';

interface Props {
	plot: string;
}

const PlotSection: React.VFC<Props> = ({ plot }) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	return (
		<p className='mt-5 text-base'>
			{isReadMore ? plot?.slice(0, 150) : plot}
			{!isReadMore && <br />}

			{plot?.length > 150 && (
				<span className='text-semibold cursor-pointer text-amber-400' onClick={toggleReadMore}>
					{isReadMore ? '...read more' : ' ..show less'}
				</span>
			)}
		</p>
	);
};
export default PlotSection;
