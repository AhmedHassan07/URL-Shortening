import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class UsersService {

  public currentUser : Object;
  constructor (private http: Http) {}

  signup(body) : Observable<any[]> {

    // ...using get request
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    return this.http.post('/api/users/create' , body , options)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      .do(res => {
        this.currentUser = res;
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  login(body) : Observable<any[]> {

    // ...using get request
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    return this.http.post('/api/users/login' , body , options)
      // ...and calling .json() on the response to return data
      .map((res) => res)
      .do(res => {
        this.currentUser = res;
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  checkAuthenticationStatus() {

    return this.http.get('/api/users/me')
      // ...and calling .json() on the response to return data
      .map((res:Response) => {
        console.log(res)
       if(res){
         return res.json();
       }
        return {}
      }).do(res => {
        if(res.data){
          this.currentUser = res.json();
        } else{
          this.currentUser = {}
        }

      })

//...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  signout() {

    return this.http.get('/api/signout')
      // ...and calling .json() on the response to return data
      .map(() => {
         return ;

      }).do(res => {
          this.currentUser = {}
      })

//...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
