import { Link } from 'react-router-dom';
import { RiAlarmWarningFill } from 'react-icons/ri';

const NotFoundPage = () => {
	return (
		<div className='layout flex min-h-screen flex-col items-center justify-center text-center text-white'>
			<RiAlarmWarningFill size={60} className='animate-flicker drop-shadow-glow text-amber-400' />
			<h1 className='mt-8'>Page Not Found</h1>
			<Link className='mt-4 text-blue-500 underline' to='/'>
				Back to Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
