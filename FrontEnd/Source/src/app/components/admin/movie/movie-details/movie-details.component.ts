import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie, MovieList } from 'src/app/models/movie/movie.model';
import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { Language } from 'src/app/models/language/language.model';
import { LanguageService } from 'src/app/services/language/language.service';
import { Video } from 'src/app/models/video/video.model';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentMovie: MovieList = {};
  // currentMovieList?: MovieList;
  message = '';
  videoId: any;
  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private languageSevice: LanguageService,
    private videoService: VideoService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.currentMovie);
    if (!this.viewMode) {
      this.message = '';
      // this.getMovie(this.route.snapshot.params["id"]);
    }
  }

  getMovie(id: string): void {
    this.movieService.get(id)
      .subscribe({
        next: (data) => {
          this.currentMovie = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateMovie(): void {
    const data = {

    };

    this.message = '';

    this.movieService.update(this.currentMovie.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }



  deleteMovie(): void {
    this.videoId = this.currentMovie.video?.id;
    this.movieService.delete(this.currentMovie.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.videoService.delete(this.videoId)
            .subscribe({
              next: (res) => {
                console.log(res);
              },
              error: (e) => console.error(e)
            });
          this.router.navigate(['/admin/movie']);
        },
        error: (e) => console.error(e)
      });
  }

}