import { BsSearch } from 'react-icons/bs';

interface Props {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ onSubmit, search, setSearch }: Props) => {
	return (
		<form onSubmit={onSubmit}>
			<div className='flex h-14 items-center rounded-full border-2 border-pink-500 p-1'>
				<input
					type='text'
					value={search}
					placeholder='type here to search movies or show'
					onChange={(e) => setSearch(e.target.value)}
					aria-label='Search Movie'
					className='grow border-0 bg-transparent px-2 text-white focus:outline-none'
				/>
				<button className='h-[calc(60px_-_10px)] w-[calc(60px_-_10px)] rounded-full bg-pink-500 p-2'>
					<BsSearch className='h-5 w-5' />
				</button>
			</div>
		</form>
	);
};
export default SearchInput;
