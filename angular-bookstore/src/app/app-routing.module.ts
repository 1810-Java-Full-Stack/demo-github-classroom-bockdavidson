import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent }   from './home/home.component';
import { BooksComponent }      from './books/books.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { AuthorComponent }   from './author/author.component';
import { AuthorDetailComponent }   from './author-detail/author-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'detail_author/:id', component: AuthorDetailComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}