import { Component } from '@angular/core';
import { Language } from 'src/app/models/language/language.model';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent {

  language: Language = {
    language_name: '',
  };
  submitted = false;

  constructor(private languageService: LanguageService) { }

  saveLanguage(): void {
    const data = {
      language_name: this.language.language_name
    };

    this.languageService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newLanguage(): void {
    this.submitted = false;
    this.language = {
      language_name: ''
    };
  }

}