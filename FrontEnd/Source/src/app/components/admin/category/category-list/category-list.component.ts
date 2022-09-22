import { Component, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category?: Category[];
  currentCategory: Category = {};
  currentIndex = -1;
  category_name = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.retrieveCategory();
  }

  retrieveCategory(): void {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          this.category = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCategory();
    this.currentCategory = {};
    this.currentIndex = -1;
  }

  setActiveCategory(category: Category, index: number): void {
    this.currentCategory = category;
    this.currentIndex = index;
  }

  removeAllCategory(): void {
    this.categoryService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentCategory = {};
    this.currentIndex = -1;

    this.categoryService.findByName(this.category_name)
      .subscribe({
        next: (data) => {
          this.category = data;
          console.log(data);
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
