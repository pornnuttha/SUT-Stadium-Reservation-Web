import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseconfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { TableComponent } from './table/table.component';
import { TypeComponent } from './type/type.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MatTabsModule} from '@angular/material/tabs';
import { TabletennisComponent } from './tabletennis/tabletennis.component';
import { ReservationComponent } from './reservation/reservation.component';
import { Tablebadminton2Component } from './tablebadminton2/tablebadminton2.component';
import { CancelComponent } from './cancel/cancel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule,MatDialogModule,MatDialog} from '@angular/material';
import { FlotChartComponent } from './flot-chart/flot-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { TennisflowchartComponent } from './tennisflowchart/tennisflowchart.component';
import { WrongComponent } from './wrong/wrong.component';
import { NotCorrectComponent } from './not-correct/not-correct.component';
import { FlotChartTennisComponent } from './flot-chart-tennis/flot-chart-tennis.component';
import 'chart.piecelabel.js';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    TableComponent,
    TypeComponent,
    TabletennisComponent,
    ReservationComponent,
    Tablebadminton2Component,
    CancelComponent,
    FlotChartComponent,
    TennisflowchartComponent,
    WrongComponent,
    NotCorrectComponent,
    FlotChartTennisComponent,
    TypeadminComponent,
    AdmintennisTComponent,
    Adminbad1TComponent,
    Adminbad2TComponent,
    AdmintennisFComponent,
    AdminbadmintonFComponent,
    AdmintennisfmComponent,
    AdminbadfmComponent,
    BadfmComponent,
    TennisfmComponent,
    
    
  ],
  imports: [
    FormsModule,
    AppComponent,
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatTabsModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    MatDialogModule,
    ChartModule,
  ],
  providers: [],
  entryComponents: [
    CancelComponent,
    ReservationComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
