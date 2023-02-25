import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from 'src/layouts/layouts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AccountModule } from './account/account.module';
import { AccountRoutingModule } from './account/account-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    PagesRoutingModule,
    PagesModule,
    MatDialogModule,
    AccountModule,
AccountRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
