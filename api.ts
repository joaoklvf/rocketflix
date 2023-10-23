import { Observable, of } from "rxjs";

export const API_KEY = 'api_key=dda31cfe5bf9eb6ef49ab1d2aad0d456';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const language = 'language=pt-BR';

export const handleError = <T>(operation = 'operation', result?: T) => {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}