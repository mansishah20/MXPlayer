import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video/video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Video, types } from 'src/app/models/video/video.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentVideo: Video = {
    video_name: '',
    description: '',
    type: undefined,
    rating: undefined,
    reales_year: undefined,
    watch_count: undefined,
    thumbnail_path: undefined,
    video_path: '',
  };
  
  message = '';
  keys = Object.keys;
  video_types = types;

  constructor(
    private VideoService: VideoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getVideo(this.route.snapshot.params["id"]);
    }
  }

  getVideo(id: string): void {
    this.VideoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentVideo = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateVideo(): void {
    const data = {
      video_name: this.currentVideo.video_name,
      description: this.currentVideo.description,
      type: this.currentVideo.type,
      rating: this.currentVideo.rating,
      reales_year: this.currentVideo.reales_year,
      watch_count: this.currentVideo.watch_count,
      thumbnail_path: this.currentVideo.thumbnail_path,
      video_path: this.currentVideo.video_path
    };

    this.message = '';

    this.VideoService.update(this.currentVideo.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }



  deleteVideo(): void {
    this.VideoService.delete(this.currentVideo.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/video']);
        },
        error: (e) => console.error(e)
      });
  }

}