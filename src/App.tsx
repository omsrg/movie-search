import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<div className=''>
			<Router>
				<Header />
				<main className='layout min-h-screen'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/detail/:imdbID' element={<MovieDetail />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
