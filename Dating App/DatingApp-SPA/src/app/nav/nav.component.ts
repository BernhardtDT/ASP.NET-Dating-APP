import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  Login() {
    this.authService.Login(this.model).subscribe(
      next => {
        console.log('login success');
      },
      error => {
        console.log(error);
      }
    );
  }

  Logout(){
    localStorage.removeItem('token');
    console.log('Logged Out');
  }

}
