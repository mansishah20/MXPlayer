import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { CategoryListComponent } from './components/admin/category/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/admin/category/category-details/category-details.component';
import { AddLanguageComponent } from './components/admin/language/add-language/add-language.component';
import { LanguageListComponent } from './components/admin/language/language-list/language-list.component';
import { LanguageDetailsComponent } from './components/admin/language/language-details/language-details.component';
import { AddMovieComponent } from './components/admin/movie/add-movie/add-movie.component';
import { MovieListComponent } from './components/admin/movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/admin/movie/movie-details/movie-details.component';
import { AddShowComponent } from './components/admin/show/add-show/add-show.component';
import { ShowListComponent } from './components/admin/show/show-list/show-list.component';
import { AddEpisodeComponent } from './components/admin/episode/add-episode/add-episode.component';
import { EpisodeListComponent } from './components/admin/episode/episode-list/episode-list.component';
import { VideoListComponent } from './components/admin/video/video-list/video-list.component';
import { VideoDetailsComponent } from './components/admin/video/video-details/video-details.component';
import { AddVideoComponent } from './components/admin/video/add-video/add-video.component';
import { LoginComponent } from './components/user/login/login.component';
import { MoviesComponent } from './components/user/movies/movies.component';
import { HomeComponent } from './components/user/home/home.component';
import { PostersComponent } from './components/user/posters/posters.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { WatchMovieComponent } from './components/user/watch-movie/watch-movie.component';
import { MoviePageComponent } from './components/user/movie-page/movie-page.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ListComponent } from './components/user/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AddCategoryComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    AddLanguageComponent,
    LanguageListComponent,
    LanguageDetailsComponent,
    VideoListComponent,
    VideoDetailsComponent,
    AddVideoComponent,
    AddMovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    AddShowComponent,
    ShowListComponent,
    AddEpisodeComponent,
    EpisodeListComponent,
    LoginComponent,
    MoviesComponent,
    HomeComponent,
    PostersComponent,
    FooterComponent,
    WatchMovieComponent,
    MoviePageComponent,
    SignupComponent,
    ListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
