import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailType } from 'types/MovieDetail';
import { ResponseType } from 'types/Movies';
import { DefaultState, TermAndPage } from 'types/MovieSlice';
import apiMovies from 'utils/apiMovies';

const initialState = {
	movies: {},
	shows: {},
	movieDetail: {},
	isLoading: false,
	errorMessage: null,
	page: 1,
} as DefaultState;

// Get movies by title
export const fetchMoviesByTitle = createAsyncThunk<
	ResponseType,
	TermAndPage,
	{ rejectValue: string }
>('movies/fetchMoviesByTitle', async (termAndPage, { rejectWithValue }) => {
	const { term, page } = termAndPage;
	localStorage.setItem('searchTerm', term);
	try {
		const response = await apiMovies.get(
			`?s=${term}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}&type=movie`
		);
		return response.data;
	} catch (error: any) {
		return rejectWithValue(error.response.data.Error);
	}
});

// Get movies detail
export const fetchMoviesById = createAsyncThunk<MovieDetailType, string, { rejectValue: string }>(
	'movies/fetchMoviesById',
	async (movieId, { rejectWithValue }) => {
		try {
			const response = await apiMovies.get(
				`?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}&plot=full`
			);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.Error);
		}
	}
);

// Get series
// for next feature
export const fetchSeriesByTitle = createAsyncThunk<ResponseType>(
	'movies/fetchSeriesByTitle',
	async () => {
		try {
			const response = await apiMovies.get(
				`?s=friends&page=1&apikey=${process.env.REACT_APP_API_KEY}&type=series`
			);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	}
);

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeMovieDetail: (state) => {
			state.movieDetail = {} as MovieDetailType;
		},

		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesByTitle.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchMoviesByTitle.fulfilled, (state, action) => {
				state.isLoading = false;
				state.movies = action.payload;
			})
			.addCase(fetchMoviesByTitle.rejected, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.errorMessage = action.payload;
				}
			})
			.addCase(fetchMoviesById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchMoviesById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.movieDetail = action.payload;
			})
			.addCase(fetchMoviesById.rejected, (state, action) => {
				state.isLoading = false;
				state.errorMessage = action.payload;
			});
	},
});

export const { removeMovieDetail, changePage } = movieSlice.actions;
export default movieSlice.reducer;
