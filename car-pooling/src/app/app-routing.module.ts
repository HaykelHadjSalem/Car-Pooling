import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DriverComponent } from './components/driver/driver.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PassengerProfileComponent } from './components/passenger/passenger-profile/passenger-profile.component';
import {CarComponent} from './components/driver/car/car.component';
import { AuthGuard } from './components/_helper/auth.guard';
import { DriverProfileComponent } from './components/driver/driver-profile/driver-profile.component';
import { AuthPassengerGuard } from './components/_helper/auth.passenger.guard';
import {DriverDetailComponent} from './components/passenger/driver-detail/driver-detail.component';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'login', component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'contact', component: ContactComponent},
{path:'home', component: HomeComponent},
{path :'passenger/detail/:id', component : DriverDetailComponent , canActivate : [AuthPassengerGuard]},
{path :'car', component: CarComponent , canActivate : [AuthGuard]},
{path:'driver/profile', component: DriverProfileComponent, canActivate : [AuthGuard]},
{path: 'driver', component: DriverComponent , canActivate : [AuthGuard] },
{path:'passenger', component:  PassengerComponent, canActivate : [AuthPassengerGuard]},
{path:'passenger/profile', component:  PassengerProfileComponent, canActivate : [AuthPassengerGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
