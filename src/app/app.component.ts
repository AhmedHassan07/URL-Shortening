import {Component} from '@angular/core';
import {UsersService} from './users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: UsersService, private router: Router) {
  }

  //ngOnInit(){
  //  this.auth.checkAuthenticationStatus().subscribe((data) => {
  //
  //    if(data){
  //      this.router.navigate(['course'])
  //    }
  //
  //  })
  //}

}
