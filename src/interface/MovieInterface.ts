export interface ElType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieType {
  data: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  };
  isOnWishlist?: boolean
}
