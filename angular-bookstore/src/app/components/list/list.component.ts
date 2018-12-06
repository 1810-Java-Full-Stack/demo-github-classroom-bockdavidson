import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { HomeComponent } from 'src/app/components/home/home.component';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //title:string;
  //id: string;
  books: Book[];
  

  constructor() { }

  ngOnInit() {
    //this.id = '1';
    //this.title = 'Fellowship of the Ring';
    this.books = [
      {
        id: '1',
        title: 'The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        info: 'The first of the trilogy'
      },
      {
        id: '2',
       title: 'The Two Towers',
       author: 'J.R.R Tolkien',
       info: 'The second of the trilogy'
     },
     {
       id: '3',
       title: 'The Return of the King',
       author: 'J.R.R Tolkien',
       info: 'The third of the trilogy'
     },
    ]
  }

}
