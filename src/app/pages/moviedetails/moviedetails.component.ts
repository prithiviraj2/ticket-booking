import { Component,OnInit } from '@angular/core';
import { movies } from '../home/movie';
import { ActivatedRoute } from '@angular/router';
import { castlist } from './cast';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
movies=movies
getMovieCastResult= castlist
  paramId: any;
  movie:any;

constructor(
  private route:ActivatedRoute
){}

ngOnInit(): void {
  

  this.paramId = this.route.snapshot.params['id'];
  console.log(this.paramId)
  if (this.paramId) {
    this.moviedetails(this.paramId);
  }
}
  moviedetails(id: any) {
        console.log(id);
        console.log(this.movies);
        
    const founditem = this.movies.filter((item: any) => {
      return item.id === id
    })  
    console.log(founditem);
    
    this.movie=founditem
  }

}
