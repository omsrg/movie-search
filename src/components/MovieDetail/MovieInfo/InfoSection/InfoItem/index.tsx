interface Color {
	color: 'sky' | 'gray';
}

interface Props extends Color {
	label: string;
	item: string;
}

const InfoItem: React.VFC<Props> = ({ label, item, color }) => {
	const textColor = color === 'sky' ? 'text-sky-400' : 'text-gray-100';
	return (
		<div className='flex'>
			<span className='inline-block min-w-[5.5rem] py-2 font-semibold sm:min-w-[6rem]'>
				{label}
			</span>
			<span className={`${textColor} inline-block py-2`}>{item}</span>
		</div>
	);
};
export default InfoItem;
