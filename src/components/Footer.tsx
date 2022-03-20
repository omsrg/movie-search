const Footer = () => {
	return (
		<footer className='mt-10 flex h-20 items-center space-x-2 bg-gray-900 px-10 text-white'>
			<p className='font-semibold'>copyright &copy; {new Date().getFullYear()}.</p>
			<p className='font-semibold'>Made with &#x2764; by Ompi.</p>
		</footer>
	);
};
export default Footer;
