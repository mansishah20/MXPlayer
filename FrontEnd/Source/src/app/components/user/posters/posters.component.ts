import { Component, OnInit } from '@angular/core';
import { Poster } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {
  posters?: Poster[];
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getPoster()
      .subscribe({
        next: (data) => {
          this.posters = data;
          console.log(this.posters);
        },
        error: (e) => console.error(e)
      });
  }
}
