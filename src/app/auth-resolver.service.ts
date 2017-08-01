import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class AuthResolverService implements Resolve<any> {
  constructor(private http: Http,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get('/api/users/me')
    // ...and calling .json() on the response to return data
      .do(res => {
        //this.currentUser = res;
        let currentUrl: String = this.router.url;
        if (currentUrl === "/login" || currentUrl === "/signup") {
          console.log(res.json());
          //if(res){
          //    return this.router.navigate(['course'])
          //}
          return true;
        } else {
          if (res) {
            return res;
          }
          this.router.navigate(['login'])
        }
      })

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
