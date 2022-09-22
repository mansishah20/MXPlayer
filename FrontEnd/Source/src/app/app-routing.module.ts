import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { CategoryListComponent } from './components/admin/category/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/admin/category/category-details/category-details.component';
import { LanguageListComponent } from './components/admin/language/language-list/language-list.component';
import { AddLanguageComponent } from './components/admin/language/add-language/add-language.component';
import { LanguageDetailsComponent } from './components/admin/language/language-details/language-details.component';
import { VideoListComponent } from './components/admin/video/video-list/video-list.component';
import { AddVideoComponent } from './components/admin/video/add-video/add-video.component';
import { VideoDetailsComponent } from './components/admin/video/video-details/video-details.component';
import { MovieDetailsComponent } from './components/admin/movie/movie-details/movie-details.component';
import { AddMovieComponent } from './components/admin/movie/add-movie/add-movie.component';
import { MovieListComponent } from './components/admin/movie/movie-list/movie-list.component';
import { HeaderComponent } from './components/admin/header/header.component';

import { NavbarComponent } from './components/user/navbar/navbar.component';
import { HomeComponent } from './components/user/home/home.component';
import { MoviePageComponent } from './components/user/movie-page/movie-page.component';
import { WatchMovieComponent } from './components/user/watch-movie/watch-movie.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ListComponent } from './components/user/list/list.component';

const routes: Routes = [
 { path: '', redirectTo: 'user/home', pathMatch: 'full' },
  

  { path: 'admin', component: HeaderComponent },
  { path: 'admin/category', component: CategoryListComponent },
  { path: 'admin/addcategory', component: AddCategoryComponent },
  { path: 'admin/category/:id', component: CategoryDetailsComponent},

  { path: 'admin/language', component: LanguageListComponent },
  { path: 'admin/addlanguage', component: AddLanguageComponent },
  { path: 'admin/language/:id', component: LanguageDetailsComponent },
  
  { path: 'admin/video', component: VideoListComponent },
  { path: 'admin/addvideo', component: AddVideoComponent },
  { path: 'admin/video/:id', component: VideoDetailsComponent },

  { path: 'admin/movie', component: MovieListComponent },
  { path: 'admin/addmovie', component: AddMovieComponent },
  { path: 'admin/movie/:id', component: MovieDetailsComponent },

  { path: 'user/movie', component: MoviePageComponent},
  { path: 'user/home', component: HomeComponent },
  { path: 'user/list', component: ListComponent },
  { path: 'user/watch-movie/:id', component: WatchMovieComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }