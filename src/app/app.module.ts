import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import  { UsersService } from './users.service';
import { AuthResolverService } from './auth-resolver.service';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
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
    path : 'course',
    component : CoursesComponent,
    resolve: {
      user: AuthResolverService
    }
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService , AuthResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
