import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL, handleError, language } from 'api';
import { catchError, Observable, tap } from 'rxjs';
import { MovieData } from 'src/interfaces/movie';

const getRandomNumber = () => Math.floor(Math.random() * 1000)

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  /** GET movie by id. Will 404 if id not found */
  getRandomMovie(): Observable<MovieData> {
    const randomId = getRandomNumber();
    const url = `${BASE_URL}${randomId}?${API_KEY}&${language}`;

    return this.http.get<MovieData>(url).pipe(
      tap(_ => console.log(`ID do filme encontrado: ${randomId}`)),
      catchError(handleError<MovieData>(`Falha ao buscar o filme de id: ${randomId}`)),

    );
  }
}
