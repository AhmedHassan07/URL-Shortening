/**
 * Created by ahmed on 7/31/17.
 */

import {Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {UrlShortenerComponent} from './url-shortener/url-shortener.component';
import { AuthResolverService } from './auth-resolver.service';

export const appRoutes: Routes = [
  {
    path : 'login',
    component : SigninComponent,
    resolve: {
      user: AuthResolverService
    }
  }, {
    path : 'signup',
    component : SignupComponent,
    resolve: {
      user: AuthResolverService
    }
  },
  {
    path : '',
    component : UrlShortenerComponent
  }
];
