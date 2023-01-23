export type StreamingService = {
  streaming_service_id: number;
  streaming_service_name: string;
};

export type MovieGenre = {
  movie_genre_id: number;
  movie_genre_name: string;
};

export type Movie = {
  id: number;
  name: string;
  streaming_service_id: number;
  genre_id: number;
  watched: boolean;
  date_watched: string;
  rating: number;
  created_at: Date;
};

export type CreateMovie = Omit<
  Movie,
  "id" | "watched" | "date_watched" | "rating" | "created_at"
>;

export type Error = {
  name: string;
  message: string;
};

export type MovieInfos = {
  id: number;
  name: string;
  streaming_service: string;
  genre: string;
  watched: boolean;
  date_watched: string;
  rating: number;
  created_at: Date;
};

export type MovieIdParam = {
  id: string;
};

export type GenreIdParam = {
  id: string;
};

export type MovieRating = {
  rating: number;
};
