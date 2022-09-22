import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language/language.model';
import { LanguageService } from 'src/app/services/language/language.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  
  language?: Language[];
  currentLanguage: Language = {};
  currentIndex = -1;
  language_name = '';
   
  constructor(
    private LanguageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.retrieveLanguage();
  }

  retrieveLanguage(): void {
    this.LanguageService.getAll()
      .subscribe({
        next: (data) => {
          this.language = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveLanguage();
    this.currentLanguage = {};
    this.currentIndex = -1;
  }

  setActiveLanguage(language: Language, index: number): void {
    this.currentLanguage = language;
    this.currentIndex = index;
  }

  removeAllLanguage(): void {
    this.LanguageService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentLanguage = {};
    this.currentIndex = -1;

    this.LanguageService.findByName(this.language_name)
      .subscribe({
        next: (data) => {
          this.language = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  deleteLanguage(): void {
    this.LanguageService.delete(this.currentLanguage.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/language']);
        },
        error: (e) => console.error(e)
      });
  }

}
