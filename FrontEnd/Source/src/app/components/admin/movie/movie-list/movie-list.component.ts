import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieList } from 'src/app/models/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movie?: Movie[];
  movieList?: MovieList[];
  currentMovie: Movie = {};
  currentIndex = -1;
  video_name = '';
  
  constructor(
    private movieService: MovieService,
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
  refreshList(): void {
    this.retrieveMovie();
    this.currentMovie = {};
    this.currentIndex = -1;
  }

  setActiveMovie(movie: Movie, index: number): void {
    this.currentMovie = movie;
    console.log(this.currentMovie);
    this.currentIndex = index;
  }

  removeAllMovie(): void {
    this.movieService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentMovie = {};
    this.currentIndex = -1;

    this.movieService.findByName(this.video_name)
      .subscribe({
        next: (data) => {
          this.movieList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  deleteMovie(): void {
    this.movieService.delete(this.currentMovie.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/movie']);
        },
        error: (e) => console.error(e)
      });
  }

}
