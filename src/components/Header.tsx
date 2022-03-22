import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'app/hooks';
import { changePage, fetchMoviesByTitle } from 'features/movies/movieSlice';
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
		<header className='fixed z-50 w-full bg-dark-500 shadow-md'>
			<div className='flex flex-col items-center p-4 sm:h-20 sm:flex-row sm:justify-between sm:px-10'>
				<Link to='/'>
					<div className='h2 mb-2 font-bold tracking-wider text-amber-400 sm:mb-0'>
						Movie Search
					</div>
				</Link>
				<SearchInput onSubmit={submitHandler} search={search} setSearch={setSearch} />
			</div>
		</header>
	);
};
export default Header;
