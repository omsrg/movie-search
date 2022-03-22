import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const BackButton = () => {
	return (
		<Link to='/'>
			<button className='flex items-center rounded-sm border border-dark-200 py-1 px-2 transition-colors hover:bg-dark-500'>
				<span className='text-base'>
					<BiArrowBack />
				</span>
				<span className='mx-1'>Back</span>
			</button>
		</Link>
	);
};
export default BackButton;
