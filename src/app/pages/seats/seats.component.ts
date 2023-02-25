import { Component,OnInit } from '@angular/core';
import { movies } from '../home/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
moviedata=movies
  movie: any;
  paramId: any;

constructor(
  private route:ActivatedRoute
){}

ngOnInit(): void {

}


}
