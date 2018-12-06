import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title:string;
  author:string;
  info:string;
  isEdit: boolean = false;

  constructor() {

   }

  ngOnInit() {
    this.title = 'Fellowship of the Ring';
    this.author = 'J.R.R Tolkien';
    this.info = 'first of trilogy';
  }

  onClick(){
    this.author = this.author;
    this.info = this.info;
    console.log(this.author);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }


}
