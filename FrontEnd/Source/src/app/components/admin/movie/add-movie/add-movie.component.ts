import { Component, Input, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { Language } from 'src/app/models/language/language.model';
import { LanguageService } from 'src/app/services/language/language.service';
import { Video } from 'src/app/models/video/video.model';
import { VideoService } from 'src/app/services/video/video.service';
import { storage } from '../../../../../../firebaseconfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  movie: Movie = {
    categoryId: undefined,
    languageId: undefined,
    videoId: undefined,
  };
  category?: Category[];
  language?: Language[];
  video: Video = {
    video_name: '',
    description: '',
    type: undefined,
    rating: undefined,
    reales_year: undefined,
    watch_count: undefined,
    thumbnail_path: undefined,
    video_path: '',
  };
  tempVideoId: any;
  submitted = false;
  // file: File | null = null;

  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private languageSevice: LanguageService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.retrieveCategory();
    this.retrieveLanguage();
  }

  retrieveCategory(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.category = data;
        // console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  retrieveLanguage(): void {
    this.languageSevice.getAll().subscribe({
      next: (data) => {
        this.language = data;
        // console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  saveMovie(): void {
    const data = {
      video_name: this.video.video_name,
      description: this.video.description,
      type: 'movie',
      rating: this.video.rating,
      reales_year: this.video.reales_year,
      watch_count: this.video.watch_count,
    };
    this.videoService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.tempVideoId = res.id;
        console.log(this.tempVideoId);
        const data2 = {
          categoryId: this.movie.categoryId,
          videoId: this.tempVideoId,
          languageId: this.movie.languageId,
        };

        this.movieService.create(data2).subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e),
        });
      },
      error: (e) => console.error(e),
    });
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = {
      categoryId: undefined,
      languageId: undefined,
      videoId: undefined,
    };
    this.video = {
      video_name: '',
      description: '',
      type: undefined,
      rating: undefined,
      reales_year: undefined,
      watch_count: undefined,
      thumbnail_path: undefined,
      video_path: '',
    };
  }

  uploadimage(val: any) {
    // Create the file metadata
    const file = val.target.files[0];
    console.log(file);
    /** @type {any} */
    const metadata = {
      contentType: file.type,
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'data/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.video.thumbnail_path = downloadURL;
        });
      }
    );
  }
  uploadvideo(val: any) {
    // Create the file metadata
    const file = val.target.files[0];
    console.log(file);
    /** @type {any} */
    const metadata = {
      contentType: file.type,
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'data/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.video.video_path = downloadURL;
        });
      }
    );
  }
}
