import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ListComponent } from './user/list/list.component';
import { CountryComponent } from './user/country/country.component';

const routes: Routes = [
  {path:'admin', component: LoginComponent},
  {path : 'admin', children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'list', component: ListComponent},
    {path: 'country', component: CountryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
