import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: UsersService, private router: Router) {
  }

  private currentUser: Object;

  ngOnInit() {
    this.currentUser = this.auth.currentUser
  }

  signout() {
    this.auth.signout().subscribe(() => {
      this.router.navigate(['login'])
    })
  }

}
