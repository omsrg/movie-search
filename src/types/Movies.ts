export type MovieType = {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
};

export type ResponseType = {
	Search: MovieType[];
	totalResults: string;
	Response: string;
	Error?: string;
};
