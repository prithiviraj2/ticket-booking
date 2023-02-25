import { Component,OnInit } from '@angular/core';
import { carosel } from './carosel';
import { movies } from './movie';
import { LoginComponent } from 'src/app/account/login/login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
carosel=carosel
movies=movies
constructor(
  private dialog:MatDialog
){}

ngOnInit(): void {
  
}


}
