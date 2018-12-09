import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Author } from './models/author';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthorService {

  private authorsUrl = 'api/authors';  // URL to web api

  constructor(
    private http: HttpClient
  )

     { }

     getAllAuthors() {

  
      return this.http.get<Author[]>('http://ec2-18-208-154-160.compute-1.amazonaws.com:8080/bookstore/authors');
    }

  getAuthors (): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
 
        catchError(this.handleError('getAuthors', []))
      );
  }


  getAuthorNo404<Data>(id: number): Observable<Author> {
    const url = `${this.authorsUrl}/?id=${id}`;
    return this.http.get<Author[]>(url)
      .pipe(
        map(authors => authors[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          
        }),
        catchError(this.handleError<Author>(`getAuthork id=${id}`))
      );
  }


  getAuthor(id: number): Observable<Author> {
    const url = `${this.authorsUrl}/${id}`;
    return this.http.get<Author>(url).pipe(
      catchError(this.handleError<Author>(`getAuthor id=${id}`))
    );
  }


  searchAuthors(term: string): Observable<Author[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Author[]>(`${this.authorsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Author[]>('searchAuthors', []))
    );
  }

  //////// Save methods //////////


  addAuthor (author: Author): Observable<Author> {
    return this.http.post<Author>(this.authorsUrl, author, httpOptions).pipe(
      catchError(this.handleError<Author>('addAuthor'))
    );
  }


  deleteAuthor (author: Author | number): Observable<Author> {
    const id = typeof author === 'number' ? author : author.id;
    const url = `${this.authorsUrl}/${id}`;

    return this.http.delete<Author>(url, httpOptions).pipe(
      catchError(this.handleError<Author>('deleteAuthor'))
    );
  }


  updateAuthor (author: Author): Observable<any> {
    return this.http.put(this.authorsUrl, author, httpOptions).pipe(
      catchError(this.handleError<any>('updateAuthor'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return of(result as T);
    };
  }


  
}