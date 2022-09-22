import { Component } from '@angular/core';
import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category: Category = {
    category_name: '',
  };
  submitted = false;
  errorMessage = '';

  constructor(private categoryService: CategoryService) { }

  saveCategory(): void {
    const data = {
      category_name: this.category.category_name
    };
    console.log(data)
    this.categoryService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) =>{
          this.errorMessage = e.error.message;
          console.error(e);
        } 
      });
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {
      category_name: ''
    };
  }

}