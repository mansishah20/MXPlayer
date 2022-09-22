import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Signin } from 'src/app/models/login/login.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signin: Signin = {
    contact: '',
    password: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(): void {
    const data = {
      contact: this.signin.contact,
      password: this.signin.password,
    };

    this.loginService.sigin(data).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('ACCESS_TOKEN', res.accessToken);
        localStorage.setItem('userId', res.id);
        localStorage.setItem('contact', res.contact);
        // console.log(localStorage.getItem('ACCESS_TOKEN'));
        sessionStorage.setItem("isAdmin",res.isAdmin);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        if (res.isAdmin == true) {
          this.role = 'admin';
          this.router.navigate(['/admin/category']);
        }
        else{
          this.role = 'user';
          this.router.navigate(['/user/home']);
        }
      },
      error: (e) => 
      {
        this.errorMessage = e.error.message;
        this.isLoginFailed = true;
        console.error(e);
      } 
    });
  }
}
