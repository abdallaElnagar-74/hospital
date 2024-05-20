import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {path:'',redirectTo:'over',pathMatch:'full'},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'appoint',component:AppointmentComponent,title:'Appointments'},
  {path:'over',component:OverviewComponent,title:'Over View'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
