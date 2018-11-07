import { Component, OnInit ,Inject} from '@angular/core';
import { Timetable } from '../../environments/table.config';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList, } from 'angularfire2/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReservationComponent } from '../reservation/reservation.component';


@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  time_table = {} as Timetable;
  _date = new Date().getDate();
  _month = new Date().getMonth() + 1;
  _year = new Date().getFullYear();
  _userid:any;
  _username:any;

  _datetime = this._year + "-" + this._month + "-" + this._date;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private afb: AngularFireDatabase,
    public dialog: MatDialogRef<CancelComponent>,@Inject(MAT_DIALOG_DATA)public data: any,
    public dialog1: MatDialogRef<ReservationComponent>,@Inject(MAT_DIALOG_DATA)public data1: any,
    ) {}
  
  async _OK(time_table: Timetable) {

    await this.afb.list('time_table/' + this.data.sport + '/' + this.data.stadium + '/' + this._datetime + '/' + this.data.time).remove(); 
    this.dialog.close();
    this.dialog.close();
    
  }

  _cancle() {

    this.dialog.close();
    this.dialog.close();
  }

  ngOnInit() {
    this._userid='';
    this._username='';
    this.afb.list('time_table/' + this.data.sport + '/' + this.data.stadium + '/' + this._datetime + '/' + this.data.time).valueChanges().subscribe(items => {
      if(items[1]=='true'){
        this._userid=items[2];
        this._username=items[3];
        this.break();
      }
      else{
        this._userid=items[3];
        this._username=items[4];
        this.break();
      }
      console.log('userid: '+this._userid+'\nusername: '+this._username);
      
    });
  }
break(){
  this.break();
}
}

