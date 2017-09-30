import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UsersService, private router:Router) { }

  ngOnInit() {
  }  submitForm(values) {
    this.userService.signup(values)
      .subscribe((data) => {
        if(data){
          this.router.navigate(['course'])
        }
      })
  }
}
