import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { TableComponent } from './table/table.component';
import { TypeComponent } from './type/type.component';
import { TabletennisComponent } from './tabletennis/tabletennis.component';
import { ReservationComponent } from './reservation/reservation.component';
import { Tablebadminton2Component } from './tablebadminton2/tablebadminton2.component';
import { CancelComponent } from './cancel/cancel.component';
import { FlotChartComponent } from './flot-chart/flot-chart.component';
import { TennisflowchartComponent } from './tennisflowchart/tennisflowchart.component';
import { WrongComponent } from './wrong/wrong.component';
import { NotCorrectComponent } from './not-correct/not-correct.component';
import { FlotChartTennisComponent } from './flot-chart-tennis/flot-chart-tennis.component';
import { TypeadminComponent } from './typeadmin/typeadmin.component';
import { AdmintennisTComponent } from './admintennis-t/admintennis-t.component';
import { Adminbad1TComponent } from './adminbad1-t/adminbad1-t.component';
import { Adminbad2TComponent } from './adminbad2-t/adminbad2-t.component';
import { AdmintennisFComponent } from './admintennis-f/admintennis-f.component';
import { AdminbadmintonFComponent } from './adminbadminton-f/adminbadminton-f.component';
import { AdmintennisfmComponent } from './admintennisfm/admintennisfm.component';
import { AdminbadfmComponent } from './adminbadfm/adminbadfm.component';
import { BadfmComponent } from './badfm/badfm.component';

import { TennisfmComponent } from './tennisfm/tennisfm.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
 
  { path: 'table', component: TableComponent},
  { path: 'type', component: TypeComponent},
  { path: 'tabletennis', component: TabletennisComponent},
  { path: 'reservation/:sport/:loca/:time', component: ReservationComponent},
  { path: 'tablebadminton2', component: Tablebadminton2Component},
  { path: 'cancel/:spor/:loc/:tim', component: CancelComponent},
  { path: 'BadmintonFlotchart', component: FlotChartComponent},
  { path: 'Tennisflowchart', component: TennisflowchartComponent},
  { path: 'Wrong', component: WrongComponent},
  { path: 'NotCorrect', component: NotCorrectComponent},
  { path: 'registerforem', component: FlotChartTennisComponent},
  { path: 'typeadmin', component: TypeadminComponent},
  { path: 'AdmintennisT', component: AdmintennisTComponent},
  { path: 'Adminbad1T', component: Adminbad1TComponent},
  { path: 'Adminbad2T', component: Adminbad2TComponent},
  { path: 'AdminbadmintonF', component: AdminbadmintonFComponent},
  { path: 'AdmintennisF', component: AdmintennisFComponent},
  { path: 'Admintennisfm', component: AdmintennisfmComponent},
  { path: 'Adminbadfm', component: AdminbadfmComponent},
  { path: 'Badfm', component: BadfmComponent},
  { path: 'Tennisfm', component: TennisfmComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
