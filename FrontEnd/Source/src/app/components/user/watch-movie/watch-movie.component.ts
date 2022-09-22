import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie, MovieList } from 'src/app/models/movie/movie.model';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {
  currentMovie: MovieList = {};
  id:any;
  message = '';
  url:any;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private movieService: MovieService){
}

  ngOnInit(): void {
    this.getMovie(this.route.snapshot.params["id"]);
  }
  getMovie(id: string): void {
    this.movieService.get(id)
      .subscribe({
        next: (data) => {
          this.currentMovie = data;
          this.url = this.currentMovie.video?.video_path;
        },
        error: (e) => console.error(e)
      });
  }

}
