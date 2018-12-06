import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string;
  title:string;
  author:string;
  info:string;
  isEdit: boolean = false;
  books: Book[];
  
  

  constructor(public route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
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
    //this.title = 'Fellowship of the Ring';
    //this.author = 'J.R.R Tolkien';
    //this.info = 'first of trilogy';
    
    for( let b of this.books){
      if(this.id == b.id){
        this.title = b.title;
        this.author =  b.author;
        this.info = b.info;

      }


    }

   
  }

  onClick(){
    this.author = this.author;
    this.info = this.info;
    console.log(this.info);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit
  }
}
