import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService : UsersService, private router:Router) { }


  ngOnInit() {
  }

  submitForm(values) {

    this.userService.login(values)
      .subscribe((data) => {
        if(data){
          this.router.navigate(['course'])
        }
      })
  }
}
