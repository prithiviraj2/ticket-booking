import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from '../account/login/login.component';
import { TheaterdetailsComponent } from './theaterdetails/theaterdetails.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [
  {
    path: "", component: MainComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "movie", component: MoviedetailsComponent },
      { path: "movie/:id", component: MoviedetailsComponent },
      { path: "login", component: LoginComponent },
      { path: "theater", component: TheaterdetailsComponent },
      { path: "seat", component: SeatsComponent },
      { path: "seat/:id", component: SeatsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
