import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { DetailComponent } from 'src/app/components/detail/detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'title', component: DetailComponent},
    { path: 'detail', component: DetailComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }