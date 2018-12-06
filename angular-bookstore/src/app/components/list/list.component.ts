import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title:string;
  

  constructor() { }

  ngOnInit() {
    this.title = 'Fellowship of the Ring';
  }

}
