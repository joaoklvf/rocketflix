// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// HTTP
import { catchError, Observable, tap } from 'rxjs';

// API
import { API_KEY, BASE_URL, handleError, language } from 'api';

// Interfaces
import { MovieData } from 'src/interfaces/movie';

// Util
import { getRandomNumber } from '../util/math';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) { }

  getRandomMovie(): Observable<MovieData> {
    const randomId = getRandomNumber();
    const url = `${BASE_URL}${randomId}?${API_KEY}&${language}`;

    return this.http.get<MovieData>(url).pipe(
      tap(_ => console.log(`Id do filme encontrado: ${randomId}`)),
      catchError(handleError<MovieData>(`Falha ao buscar o filme de id: ${randomId}`))
    );
  }
}
