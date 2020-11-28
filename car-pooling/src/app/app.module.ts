import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from '../app/components/feed/feed.component';
import { RouterModule } from '@angular/router';
import {AuthPassengerGuard} from './components/_helper/auth.passenger.guard'
import {AuthGuard} from './components/_helper/auth.guard'
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { authInterceptorProviders } from './components/_helper/auth.interceptor';
import { CarComponent } from './components/driver/car/car.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PassengerProfileComponent } from './components/passenger/passenger-profile/passenger-profile.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriverProfileComponent } from './components/driver/driver-profile/driver-profile.component';
import { FeedbackComponent } from './components/driver/feedback/feedback.component';
import {DriverDetailComponent} from './components/passenger/driver-detail/driver-detail.component';

//adding the ngx lib dropZone (cloudinary)
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    DriverComponent,
    PassengerComponent,
    PassengerProfileComponent,
    DriverProfileComponent,
    CarComponent,
    FeedbackComponent,
    DriverDetailComponent,
    AboutUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ],
  providers: [authInterceptorProviders, AuthPassengerGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
