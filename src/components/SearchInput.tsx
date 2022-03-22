import { BsSearch } from 'react-icons/bs';
interface Props {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.VFC<Props> = ({ onSubmit, search, setSearch }) => {
	return (
		<form onSubmit={onSubmit} className='w-full sm:w-1/2 lg:max-w-sm'>
			<div className='flex items-center rounded-md border border-dark-300 p-1 md:h-10'>
				<button className='p-2 text-base'>
					<BsSearch className='' />
				</button>
				<input
					type='text'
					value={search}
					placeholder='type here to search...'
					onChange={(e) => setSearch(e.target.value)}
					aria-label='Search Movie'
					className='w-full grow border-0 bg-transparent px-2 text-white focus:outline-none'
				/>
			</div>
		</form>
	);
};
export default SearchInput;
