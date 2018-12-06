import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string;
  author:string;
  info:string;

  constructor() {

   }

  ngOnInit() {
    this.title = 'Fellowship of the Ring';
    this.author = 'J.R.R Tolkien';
    this.info = 'first of trilogy';
  }

  

}