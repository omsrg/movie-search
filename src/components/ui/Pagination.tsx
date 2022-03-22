import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { changePage } from 'features/movies/movieSlice';

const Pagination = () => {
	const dispatch = useAppDispatch();

	const handlePage = ({ selected }: { selected: number }) => {
		dispatch(changePage(selected + 1));
	};

	const { page } = useAppSelector((state) => state.movieApp);
	const { movies } = useAppSelector((state) => state.movieApp);
	const totalPages = Math.ceil(parseInt(movies.totalResults) / 10);

	return (
		<ReactPaginate
			pageCount={totalPages}
			previousLabel='Prev'
			nextLabel='Next'
			breakLabel='...'
			onPageChange={handlePage}
			className='flex items-center justify-center space-x-1 xs:space-x-2'
			pageClassName='w-8 h-8 flex items-center justify-center rounded-md border border-dark-200 hover:bg-dark-500'
			activeClassName='bg-white text-dark-500'
			forcePage={page - 1}
			marginPagesDisplayed={1}
			pageRangeDisplayed={3}
			nextClassName='h-8 px-2 flex items-center justify-center border border-dark-200 text-center rounded-md'
			previousClassName='h-8 px-2 flex items-center justify-center border border-dark-200 text-center rounded-md'
			nextLinkClassName='text-center rounded-md font-bold'
			previousLinkClassName='text-center rounded-md font-bold'
			disabledClassName='bg-dark-300 text-dark-400 border-none'
			disabledLinkClassName='cursor-default'
		/>
	);
};
export default Pagination;
