import { Component, OnInit } from '@angular/core';


import { Book } from '../models/book';
import { BookService } from '../book.service';

import { Author }         from '../models/author';
import { AuthorService }  from '../author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  authors: Author[] = [];

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    this.getBooks();
    console.log('this.getBooks');
    console.log(this.getBooks);
   // this.getAuthors();

  }

  getBooks(): void {
    this.bookService.getAllBooks()
      .subscribe(books => this.books = books.slice(1, 5));
      console.log('books');
      console.log(this.books);
  
  }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors.slice(1, 5));
  }

}
