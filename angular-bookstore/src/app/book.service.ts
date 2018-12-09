import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './models/book';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BookService {

  private booksUrl = 'http://ec2-18-208-154-160.compute-1.amazonaws.com:8080/bookstore/books/';  // URL to web api

  constructor(
    private http: HttpClient
  )

     { }

  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
 
        catchError(this.handleError('getBooks', []))
      );
  }


  getBookNo404<Data>(id: number): Observable<Book> {
    const url = `${this.booksUrl}/?id=${id}`;
    return this.http.get<Book[]>(url)
      .pipe(
        map(books => books[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          
        }),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  getAllBooks() {
    console.log('getAllBooks');
    console.log(this.booksUrl);

    return this.http.get<Book[]>('http://ec2-18-208-154-160.compute-1.amazonaws.com:8080/bookstore/books/');
  }

  getBook(id: number)//: //Observable<Book>
   {
     return this.http.get<Book>('http://ec2-18-208-154-160.compute-1.amazonaws.com:8080/bookstore/books/'+ id);
   // const url = `${this.booksUrl}/${id}`;
    //return this.http.get<Book>(url).pipe(
      //catchError(this.handleError<Book>(`getBook id=${id}`))
   // );
  }


  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }

  //////// Save methods //////////


  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }


  deleteBook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteBook'))
    );
  }


  updateBook (book: Book): Observable<any> {
    return this.http.put(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<any>('updateBook'))
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