import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { Language } from 'src/app/models/language/language.model';
import { LanguageService } from 'src/app/services/language/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  category?: Category[];
  language?: Language[];
  router: string = '';

  constructor(
    private categoryService: CategoryService,
    private languageSevice: LanguageService
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
  checkuser() {
    if (sessionStorage.getItem('isAdmin') == 'true') {
      return true;
    }
    return false;
  }
  isLogin() {
    //console.log(localStorage.getItem('ACCESS_TOKEN'))
    if (localStorage.getItem('ACCESS_TOKEN')) 
    {
      return true;
    }
    else{
      return false;
    } 
  }
  logOut() {
    // console.log("Logout in proccees");
    localStorage.removeItem('ACCESS_TOKEN');
    sessionStorage.removeItem('isAdmin');
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
}
