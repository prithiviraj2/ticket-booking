import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from 'src/layouts/layouts.module';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AccountModule } from '../account/account.module';
import { TheaterdetailsComponent } from './theaterdetails/theaterdetails.component';
import { SeatsComponent } from './seats/seats.component';
@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MoviedetailsComponent,
    TheaterdetailsComponent,
    SeatsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule,
    AccountModule
  ]
})
export class PagesModule { }
