import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home/home.component';
import { AuthGuard } from './services/authguard/auth.guard';
import { ProjectComponent } from './components/project/project.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
