import { Category } from '../category/category.model';
import { Language } from '../language/language.model';
import { Video } from '../video/video.model';
export class Movie {
  id?: any;
  categoryId?: number;
  languageId?: number;
  videoId?: number;
}

export class MovieList {
  constructor(movie: Movie, category: Category, language: Language, video: Video) { };
  id?: any;
  movieId?: any;
  video?: Video;
  category?: Category;
  language?: Language;
}