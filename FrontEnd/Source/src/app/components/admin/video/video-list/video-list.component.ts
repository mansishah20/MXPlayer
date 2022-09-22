import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/models/video/video.model';
import { VideoService } from 'src/app/services/video/video.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  video?: Video[];
  currentVideo: Video = {};
  currentIndex = -1;
  video_name = '';

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.retrieveVideo();
  }

  retrieveVideo(): void {
    this.videoService.getAll()
      .subscribe({
        next: (data) => {
          this.video = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveVideo();
    this.currentVideo = {};
    this.currentIndex = -1;
  }

  setActiveVideo(video: Video, index: number): void {
    this.currentVideo = video;
    this.currentIndex = index;
  }

  removeAllVideo(): void {
    this.videoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentVideo = {};
    this.currentIndex = -1;

    this.videoService.findByName(this.video_name)
      .subscribe({
        next: (data) => {
          this.video = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  deleteVideo(): void {
    this.videoService.delete(this.currentVideo.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/video']);
        },
        error: (e) => console.error(e)
      });
  }

}
