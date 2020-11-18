import { BrowserAnimationsModule,  } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
   
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCs6QhIZmoPP-HLdb3zdAKb0giGL18AX9k'
  }),
  ],


  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],

  


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
