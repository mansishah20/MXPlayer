import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Signin, Signup } from 'src/app/models/login/login.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  signup: Signup = {
    name: '',
    contact: '',
    password: '',
  };
  cnfpassword:string='';
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  signUp(): void {
    const data = {
      name: this.signup.name,
      contact: this.signup.contact,
      password: this.signup.password,
    };

    if(this.cnfpassword== this.signup.password){
      this.loginService.signup(data).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        error: (e) => console.error(e)
      });
    }
  
  }
}
