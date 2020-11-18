import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DriverViewComponent } from './components/driver-view/driver-view.component';


const routes: Routes = [
{path:'login', component: LoginComponent},
{path:'driver-view', component:  DriverViewComponent},
{path:'register',component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
