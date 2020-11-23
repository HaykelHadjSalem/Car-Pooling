import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DriverComponent } from './components/driver/driver.component';
import { RidesComponent} from './components/rides/rides.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PassengerProfileComponent } from './components/passenger/passenger-profile/passenger-profile.component';
import {CarComponent} from './components/driver/car/car.component';
import { AuthGuard } from './components/_helper/auth.guard';
import { DriverProfileComponent } from './components/driver/driver-profile/driver-profile.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'login', component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'contact', component: ContactComponent},
{path:'home', component: HomeComponent},
{path :'car', component: CarComponent , canActivate : [AuthGuard]},
{path :'rides', component: RidesComponent , canActivate : [AuthGuard]},
{path:'driver/profile', component: DriverProfileComponent, canActivate : [AuthGuard]},
{path: 'driver', component: DriverComponent , canActivate : [AuthGuard] },
{path:'passenger', component:  PassengerComponent},
{path:'passenger/profile', component:  PassengerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
