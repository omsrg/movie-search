const Footer = () => {
	return (
		<footer className='mt-10 flex h-20 items-center justify-center bg-dark-500 px-10'>
			<div className='flex flex-wrap   text-white '>
				<p className='mr-2 font-semibold'>copyright &copy; {new Date().getFullYear()}.</p>
				<p className='font-semibold'>Made with &#x2764; by Ompi.</p>
			</div>
		</footer>
	);
};
export default Footer;
