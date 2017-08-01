import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class DashboardService {

  constructor(private http: Http) {
  }

  getLinks(limit, offset): Observable<any> {

    // ...using get request
    const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    const options = new RequestOptions({headers: headers});

    return this.http.get('/api/get-url/limit/' + limit + '/offset/' + offset, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}
