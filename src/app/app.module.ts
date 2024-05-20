import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http'; // Add this line
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    LoginComponent,
    OverviewComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
