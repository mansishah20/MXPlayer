import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Language } from 'src/app/models/language/language.model';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.css']
})
export class LanguageDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentLanguage: Language = {
    language_name: ''
  };

  message = '';

  constructor(
    private LanguageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getLanguage(this.route.snapshot.params["id"]);
    }
  }

  getLanguage(id: string): void {
    this.LanguageService.get(id)
      .subscribe({
        next: (data) => {
          this.currentLanguage = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateLanguage(): void {
    const data = {
      language_name: this.currentLanguage.language_name
    };

    this.message = '';

    this.LanguageService.update(this.currentLanguage.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
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