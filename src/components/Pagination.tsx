import { useAppDispatch, useAppSelector } from '../App/hooks';
import { changePage } from '../features/movies/movieSlice';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
	const dispatch = useAppDispatch();

	const handlePage = ({ selected }: { selected: number }) => {
		dispatch(changePage(selected + 1));
	};

	const { page } = useAppSelector((state) => state.movieApp);
	const { movies } = useAppSelector((state) => state.movieApp);
	const totalPages = Math.ceil(parseInt(movies.totalResults) / 10);

	return (
		<>
			<ReactPaginate
				pageCount={totalPages}
				previousLabel='Prev'
				nextLabel='Next'
				breakLabel='...'
				onPageChange={handlePage}
				className='flex items-center space-x-2'
				pageClassName='w-8 h-8 flex items-center justify-center rounded-md border border-indigo-500'
				activeClassName='bg-indigo-500'
				forcePage={page - 1}
				marginPagesDisplayed={5}
				nextClassName='h-8 px-2 flex items-center justify-center border border-indigo-500 text-center rounded-md'
				previousClassName='h-8 px-2 flex items-center justify-center border border-indigo-500 text-center rounded-md'
				nextLinkClassName='text-center rounded-md font-bold'
				previousLinkClassName='text-center rounded-md font-bold'
				disabledLinkClassName='bg-red-500'
			/>
		</>
	);
};
export default Pagination;
