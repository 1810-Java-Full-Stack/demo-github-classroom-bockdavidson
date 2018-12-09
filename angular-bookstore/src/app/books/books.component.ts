import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

 public books: Book[];
  


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }


  getBooks() {
    this.bookService.getAllBooks().subscribe(
      (book) => {
          console.log(book);
           this.books = book;
          });
  }

  add(title: string): void {
    title= title.trim();
    if (!title) { return; }
    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}








