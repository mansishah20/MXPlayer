import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category/category.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCategory: Category = {
    category_name: ''
  };
  
  message = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCategory(this.route.snapshot.params["id"]);
    }
  }

  getCategory(id: string): void {
    this.categoryService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCategory = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCategory(): void {
    const data = {
      category_name: this.currentCategory.category_name
    };

    this.message = '';

    this.categoryService.update(this.currentCategory.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }



  deleteCategory(): void {
    this.categoryService.delete(this.currentCategory.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/category']);
        },
        error: (e) => console.error(e)
      });
  }

}