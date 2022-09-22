import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.retrieveList();
  }
  retrieveList(): void {
    this.movieService.getList()
      .subscribe({
        next: (data) => {
          this.list = data;
          console.log(data);
          // data.forEach(element => {
          //   element.videoId
          // });
        },
        error: (e) => console.error(e)
      });
  }

}
