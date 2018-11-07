import { Component, OnInit ,Inject} from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Timetable } from '../../environments/table.config';
import { Router,ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Location} from '@angular/common';
import { WrongComponent } from '../wrong/wrong.component';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  datalist: AngularFireList<any>;
  items: AngularFireList<any[]>;

  time_table = {} as Timetable;
  data: any[];
  test: Array<any>;
  _date = new Date().getDate();
  _month = new Date().getMonth()+1;
  _year = new Date().getFullYear();

  _datetime = this._year+"-"+this._month+"-"+this._date;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private afb: AngularFireDatabase,
    public dialog:  MatDialogRef<ReservationComponent>,@Inject(MAT_DIALOG_DATA)public data1: any,
    private _location: Location,
    public dialog1: MatDialog,
    ){}

_cancel(){
  this.dialog.close();
}
  async reservation(time_table : Timetable){
 if(time_table.username== null || time_table.userid == null || time_table.username== " " || time_table.userid == " "){
  this.openDialog();
   return null;
 }else{
      time_table.status="true";
      time_table.confirm="true";
      await this.afb.object('time_table/'+this.data1.sport+'/'+this.data1.stadium+'/'+this._datetime+'/'+this.data1.time).set(this.time_table);
    this.dialog.close();
    this.dialog.close();
    
  }
}
openDialog(): void {
  const dialogRef = this.dialog1.open(WrongComponent,{width: '400px'} );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

  ngOnInit() {
  }

} 
