import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjectComponent,
    AttendanceComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent]
})
export class AppModule { }
