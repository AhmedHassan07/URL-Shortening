/**
 * Created by ahmed on 7/31/17.
 */

import {Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {UrlShortenerComponent} from './url-shortener/url-shortener.component';
import { AuthResolverService } from './auth-resolver.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinkExpiredComponent } from './link-expired/link-expired.component';

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
  }, {
    path : 'dashboard',
    component : DashboardComponent
  }, {
    path : 'expired',
    component : LinkExpiredComponent
  },
  {
    path : '',
    component : UrlShortenerComponent
  }
];
