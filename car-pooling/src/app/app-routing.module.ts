import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DriverViewComponent } from './components/driver-view/driver-view.component';
import { DriverComponent } from './components/driver/driver.component';
import {DriverRenderViewComponent} from './components/driver-render-view/driver-render-view.component';
import { RidesComponent} from './components/rides/rides.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PassengerProfileComponent } from './components/passenger/passenger-profile/passenger-profile.component';
import {CarComponent} from './components/car/car.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'login', component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'contact', component: ContactComponent},
{path:'home', component: HomeComponent},
{path :'car', component: CarComponent},
{path :'rides', component: RidesComponent},
{path:'driver/profile', component: DriverRenderViewComponent},
{path: 'driver', component: DriverComponent },
{path:'passenger', component:  PassengerComponent},
{path:'passenger/profile', component:  PassengerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
