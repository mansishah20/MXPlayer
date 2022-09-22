import { Component } from '@angular/core';
import { Video, types } from 'src/app/models/video/video.model';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent {

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
  submitted = false;

  keys = Object.keys;
  video_types = types;

  constructor(private videoService: VideoService) {}

  saveVideo(): void {
    const data = {
      video_name: this.video.video_name,
      description: this.video.description,
      type: this.video.type,
      rating: this.video.rating,
      reales_year: this.video.reales_year,
      watch_count: this.video.watch_count,
      thumbnail_path: this.video.thumbnail_path,
      video_path: this.video.video_path
    };

    this.videoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newVideo(): void {
    this.submitted = false;
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

}