import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<button
			className='flex items-center rounded-sm border border-dark-200 py-1 px-2 transition-colors hover:bg-dark-500'
			onClick={() => navigate(-1)}
		>
			<span className='text-base'>
				<BiArrowBack />
			</span>
			<span className='mx-1'>Back</span>
		</button>
	);
};
export default BackButton;
