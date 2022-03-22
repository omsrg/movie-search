import { MovieDetailType } from './MovieDetail';
import { ResponseType } from './Movies';

export interface DefaultState {
	movies: ResponseType;
	shows: ResponseType;
	movieDetail: MovieDetailType;
	isLoading: boolean;
	errorMessage: string | null | undefined;
	page: number;
}

export interface TermAndPage {
	term: string;
	page?: number;
}
