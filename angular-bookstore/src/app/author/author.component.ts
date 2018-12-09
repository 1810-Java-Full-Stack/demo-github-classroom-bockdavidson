import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Author }         from '../models/author';
import { AuthorService }  from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[];
  


  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }


  getAuthors(): void {
    this.authorService.getAllAuthors()
        .subscribe(authors => this.authors = authors);
  }

  add(name: string): void {
    name= name.trim();
    if (!name) { return; }
    this.authorService.addAuthor({ name } as Author)
      .subscribe(author => {
        this.authors.push(author);
      });
  }

  delete(author: Author): void {
    this.authors = this.authors.filter(a => a !== author);
    this.authorService.deleteAuthor(author).subscribe();
  }
}
