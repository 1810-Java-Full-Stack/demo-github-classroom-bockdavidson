import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[];
  //title:string;
  //author:string;
  //info:string;

  constructor() {

   }

  ngOnInit() {
    //this.title = 'Fellowship of the Ring';
    //this.author = 'J.R.R Tolkien';
   // this.info = 'first of trilogy';
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