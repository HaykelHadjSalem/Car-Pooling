import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from '../app/components/feed/feed.component';
import { PostComponent } from '../app/components/post/post.component';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriverViewComponent } from './components/driver-view/driver-view.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { authInterceptorProviders } from './components/_helper/auth.interceptor';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DriverComponent,
    DriverViewComponent,
    ContactComponent,
    HomeComponent,
    CarComponent
   
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
