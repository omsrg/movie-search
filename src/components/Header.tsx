import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAppDispatch } from '../App/hooks';
import { changePage, fetchMoviesByTitle } from '../features/movies/movieSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';

const Header = () => {
	const [search, setSearch] = useState('');
	const dispatch = useAppDispatch();

	const location = useLocation();
	const navigate = useNavigate();

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search === '') {
			return;
		} else {
			dispatch(fetchMoviesByTitle({ term: search }));
			setSearch('');
			dispatch(changePage(1));
		}

		if (location.pathname !== '/') {
			navigate('/');
		}
	};

	return (
		<header className='bg-gray-900 '>
			<div className='flex h-20 items-center px-10'>
				<Link to='/'>
					<p className='text-2xl font-semibold text-white'>Movie App</p>
				</Link>
				<SearchInput onSubmit={submitHandler} search={search} setSearch={setSearch} />
			</div>
		</header>
	);
};
export default Header;
