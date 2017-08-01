import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule,  } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { appRoutes } from './routes';
import { UsersService } from './users.service';
import { UrlShortenerService } from './url-shortener.service';
import { AuthResolverService } from './auth-resolver.service';
import { DashboardService } from './dashboard/dashboard.service';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { MyDatePickerModule } from 'mydatepicker';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinkExpiredComponent } from './link-expired/link-expired.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    UrlShortenerComponent,
    DashboardComponent,
    LinkExpiredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    MyDatePickerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService , AuthResolverService, UrlShortenerService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
