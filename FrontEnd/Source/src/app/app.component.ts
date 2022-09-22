
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public show: boolean = false;
  public buttonName: string = "Admin";
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  callAdmin() {
    this.show = !this.show;
    if (this.show){
      this.buttonName = "User";
      this.router.navigate(['/admin/category']);
    }
    else{
      this.buttonName = "Admin";
      this.router.navigate(['/user/movie']);
    }
      
  }
}