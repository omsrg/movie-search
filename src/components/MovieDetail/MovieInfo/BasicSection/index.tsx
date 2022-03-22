interface Props {
	year: string;
	rated: string;
	runtime: string;
}

const BasicSection: React.VFC<Props> = ({ year, rated, runtime }) => {
	return (
		<ul className='flex space-x-5 text-xs text-dark-200 sm:text-base'>
			<li className='flex flex-col'>
				<span className=''>{year}</span>
			</li>
			<li className='flex flex-col'>
				<span className=''>{rated}</span>
			</li>
			<li className='flex flex-col'>
				<span className=''>{runtime}</span>
			</li>
		</ul>
	);
};
export default BasicSection;
