import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UrlShortenerService {

  private headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }


  shortenUrl(body): Observable<any[]> {

    // ...using post request

    return this.http.post('/api/shorten-url', body, this.options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      // ...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }


}
