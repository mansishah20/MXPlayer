import { Component, OnInit } from '@angular/core';
import { Movie, MovieList } from 'src/app/models/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie?: Movie[];
  movieList?: MovieList[];

  constructor(
    private movieService: MovieService,
    private _Activatedroute:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveMovie();
  }
  retrieveMovie(): void {
    this.movieService.getAll()
      .subscribe({
        next: (data) => {
          // this.movie = data;
          this.movieList = data;
          console.log(this.movieList);
        },
        error: (e) => console.error(e)
      });
  }
}
