import { Component, OnInit } from '@angular/core';
import { Timetable } from '../../environments/table.config';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CancelComponent } from '../cancel/cancel.component';
import { ReservationComponent } from '../reservation/reservation.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-tablebadminton2',
  templateUrl: './tablebadminton2.component.html',
  styleUrls: ['./tablebadminton2.component.css']
})
export class Tablebadminton2Component implements OnInit {
  datalist: AngularFireList<any>;
  items: AngularFireList<any[]>;

  time_table = {} as Timetable;
  data: any[];
  test: Array<any>;
  _date = new Date().getDate();
  _month = new Date().getMonth()+1;
  _year = new Date().getFullYear();
  _object: any;
  closeResult: String

  _datetime = this._year+"-"+this._month+"-"+this._date;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private afb: AngularFireDatabase,
    private modalService: NgbModal,
    public dialog: MatDialog,) {}
    onClick(time_table: Timetable, b, time) {
      console.log(time_table, b, time)
      time_table.status = "true";
      time_table.confirm = "false";
      let range = String(time)
  
      let dataSet: any;
      let dataSet2: any;
      //var status;s
      this._object = this.afb.object('time_table/badminton/' + b + '/' + this._datetime).valueChanges();
      this._object.subscribe(data => {
        console.log(data)
        if (data == null) {
          // ยังไม่มีรายการ อะไรเลยในวันนั้น
          //this.router.navigate(['/reservation/badminton/' + b + '/' + range]);
          this.openDialog1(time,b);
          time = null;
          this.break();
        } else {
          //มีแล้ว
          let key = Object.keys(data);
          
          let list = [];
          for (var i = 0; i < key.length; i++) {
            list.push(key[i]);
          }
          if(list.includes(range)){
            //ยกเลิก
            console.log('ยกเลิก')
            this.openDialog(time,b);
            //this.router.navigate(['/cancel/badminton/' + b + '/' + range]);
            time = null;
            this.break();
          }else{
            //จอง
            //this.router.navigate(['/reservation/badminton/' + b + '/' + range]);
            this.openDialog1(time,b);
            console.log('จอง')
            time = null;
            this.break();
          }
        }
      })
    }
    type(){
      this.router.navigate(['/type'], );
    }
    tennis(){
      this.router.navigate(['/tabletennis'], );
    }
    badminton1(){
      this.router.navigate(['/table'], );
    }
    badminton2(){
      this.router.navigate(['/tablebadminton2'], );
    }
    flowchartb(){
      this.router.navigate(['/BadmintonFlotchart'], );
    }
    flowchartt(){
      this.router.navigate(['/Tennisflowchart'], );
    }
    flowchartbm(){
      this.router.navigate(['/Badfm'], );
    }
   
    flowcharttm(){
      this.router.navigate(['/Tennisfm'], );
    }
    break(){
      this.break();
    }
    openDialog(timeinput:String ,b:string): void {
      const dialogRef = this.dialog.open(CancelComponent,{width: '400px',data:{time: timeinput,stadium:b,sport: "badminton"}} );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.animal = result;
      });
    }
  
    openDialog1(timeinput:String ,b:string): void {
      const dialogRef = this.dialog.open(ReservationComponent,{width: '400px',data:{time: timeinput,stadium:b,sport: "badminton"}} );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.animal = result;
      });
    }

logout(){
  this.afAuth.auth.signOut();
}

_t11 : String;
_t12 : String;
_t13 : String;
_t14 : String;
_t15 : String;
_t16 : String;
_t17 : String;
_t18 : String;
_t19 : String;
_t10 : String; 
_t21 : String;
_t22 : String;
_t23 : String;
_t24 : String;
_t25 : String;
_t26 : String;
_t27 : String;
_t28 : String;
_t29 : String;
_t20 : String;
_t31 : String;
_t32 : String;
_t33 : String;
_t34 : String;
_t35 : String;
_t36 : String;
_t37 : String;
_t38 : String;
_t39 : String;
_t30 : String;

_h11 : String;
  _h12 : String;
  _h13 : String;
  _h14 : String;
  _h15 : String;
  _h16 : String;
  _h17 : String;
  _h18 : String;
  _h19 : String;
  _h10 : String;

  _h21 : String;
  _h22 : String;
  _h23 : String;
  _h24 : String;
  _h25 : String;
  _h26 : String;
  _h27 : String;
  _h28 : String;
  _h29 : String;
  _h20 : String;

  _h31 : String;
  _h32 : String;
  _h33 : String;
  _h34 : String;
  _h35 : String;
  _h36 : String;
  _h37 : String;
  _h38 : String;
  _h39 : String;
  _h30 : String;

_h : String;
async  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user =>{
      if(user){

      }
      else{
        this.afAuth.auth.signOut();
        this.router.navigate([''], );
      }
    });
    this._t11="รอสักครู่";
    this._t12="รอสักครู่";
    this._t13="รอสักครู่";
    this._t14="รอสักครู่";
    this._t15="รอสักครู่";
    this._t16="รอสักครู่";
    this._t17="รอสักครู่";
    this._t18="รอสักครู่";
    this._t19="รอสักครู่";
    this._t10="รอสักครู่";
    
    this._t21="รอสักครู่";
    this._t22="รอสักครู่";
    this._t23="รอสักครู่";
    this._t24="รอสักครู่";
    this._t25="รอสักครู่";
    this._t26="รอสักครู่";
    this._t27="รอสักครู่";
    this._t28="รอสักครู่";
    this._t29="รอสักครู่";
    this._t20="รอสักครู่";

    this._t31="รอสักครู่";
    this._t32="รอสักครู่";
    this._t33="รอสักครู่";
    this._t34="รอสักครู่";
    this._t35="รอสักครู่";
    this._t36="รอสักครู่";
    this._t37="รอสักครู่";
    this._t38="รอสักครู่";
    this._t39="รอสักครู่";
    this._t30="รอสักครู่";

    this._h11="button3";
    this._h12="button3";
    this._h13="button3";
    this._h14="button3";
    this._h15="button3";
    this._h16="button3";
    this._h17="button3";
    this._h18="button3";
    this._h19="button3";
    this._h10="button3";

    this._h21="button3";
    this._h22="button3";
    this._h23="button3";
    this._h24="button3";
    this._h25="button3";
    this._h26="button3";
    this._h27="button3";
    this._h28="button3";
    this._h29="button3";
    this._h20="button3";

    this._h31="button3";
    this._h32="button3";
    this._h33="button3";
    this._h34="button3";
    this._h35="button3";
    this._h36="button3";
    this._h37="button3";
    this._h38="button3";
    this._h39="button3";
    this._h30="button3";

    this._h="button";

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t11 = "ไม่ว่าง";
        this._h11="button2";
      }
      else{
      
        if (items[0]=='true'){
          this._t11 = "ไม่ว่าง";
        this._h11="button2";
        }
        else if(items[2]=="true"){
          this._t11 = "*ไม่ว่าง";
          this._h11="button4";
        }
        else{
          this._t11 = "ว่าง";
          this._h11="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t12 = "ไม่ว่าง";
        this._h12="button2";

      }
      else{
        if (items[0]=='true'){
          this._t12 = "ไม่ว่าง";
        this._h12="button2";
        }
        else if(items[2]=="true"){
          this._t12 = "*ไม่ว่าง";
          this._h12="button4";
        }
        else{
          this._t12 = "ว่าง";
          this._h12="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t13 = "ไม่ว่าง";
        this._h13="button2";
      }
      else{
        if (items[0]=='true'){
          this._t13 = "ไม่ว่าง";
        this._h13="button2";
        }
        else if(items[2]=="true"){
          this._t13 = "*ไม่ว่าง";
          this._h13="button4";
        }
        else{
          this._t13 = "ว่าง";
          this._h13="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t14 = "ไม่ว่าง";
        this._h14="button2";
      }
      else{
        if (items[0]=='true'){
          this._t14 = "ไม่ว่าง";
        this._h14="button2";
        }
        else if(items[2]=="true"){
          this._t14 = "*ไม่ว่าง";
          this._h14="button4";
        }
        else{
          this._t14 = "ว่าง";
          this._h14="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t15 = "ไม่ว่าง";
        this._h15="button2";
      }
      else{
        if (items[0]=='true'){
          this._t15 = "ไม่ว่าง";
        this._h15="button2";
        }
        else if(items[2]=="true"){
          this._t15 = "*ไม่ว่าง";
          this._h15="button4";
        }
        else{
          this._t15 = "ว่าง";
          this._h15="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t16 = "ไม่ว่าง";
        this._h16="button2";
      }
      else{
        if (items[0]=='true'){
          this._t16 = "ไม่ว่าง";
        this._h16="button2";
        }
        else if(items[2]=="true"){
          this._t16 = "*ไม่ว่าง";
          this._h16="button4";
        }
        else{
          this._t16 = "ว่าง";
          this._h16="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t17 = "ไม่ว่าง";
        this._h17="button2";
      }
      else{
        if (items[0]=='true'){
          this._t17 = "ไม่ว่าง";
        this._h17="button2";
        }
        else if(items[2]=="true"){
          this._t17 = "*ไม่ว่าง";
          this._h17="button4";
        }
        else{
          this._t17 = "ว่าง";
          this._h17="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t18 = "ไม่ว่าง";
        this._h18="button2";
      }
      else{
        if (items[0]=='true'){
          this._t18 = "ไม่ว่าง";
        this._h18="button2";
        }
        else if(items[2]=="true"){
          this._t18 = "*ไม่ว่าง";
          this._h18="button4";
        }
        else{
          this._t18 = "ว่าง";
          this._h18="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t19 = "ไม่ว่าง";
        this._h19="button2";
      }
      else{
        if (items[0]=='true'){
          this._t19 = "ไม่ว่าง";
        this._h19="button2";
        }
        else if(items[2]=="true"){
          this._t19 = "*ไม่ว่าง";
          this._h19="button4";
        }
        else{
          this._t19 = "ว่าง";
          this._h19="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b8/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t10 = "ไม่ว่าง";
        this._h10="button2";
      }
      else{
        if (items[0]=='true'){
          this._t10 = "ไม่ว่าง";
        this._h10="button2";
        }
        else if(items[2]=="true"){
          this._t10 = "*ไม่ว่าง";
          this._h10="button4";
        }
        else{
          this._t10 = "ว่าง";
          this._h10="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t21 = "ไม่ว่าง";
        this._h21="button2";
      }
      else{
        if (items[0]=='true'){
          this._t21 = "ไม่ว่าง";
        this._h21="button2";
        }
        else if(items[2]=="true"){
          this._t21 = "*ไม่ว่าง";
          this._h21="button4";
        }
        else{
          this._t21 = "ว่าง";
          this._h21="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t22 = "ไม่ว่าง";
        this._h22="button2";
      }
      else{
        if (items[0]=='true'){
          this._t22 = "ไม่ว่าง";
        this._h22="button2";
        }
        else if(items[2]=="true"){
          this._t22 = "*ไม่ว่าง";
          this._h22="button4";
        }
        else{
          this._t22 = "ว่าง";
          this._h22="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t23 = "ไม่ว่าง";
        this._h23="button2";
      }
      else{
        if (items[0]=='true'){
          this._t23 = "ไม่ว่าง";
        this._h23="button2";
        }
        else if(items[2]=="true"){
          this._t23 = "*ไม่ว่าง";
          this._h23="button4";
        }
        else{
          this._t23 = "ว่าง";
          this._h23="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t24 = "ไม่ว่าง";
        this._h24 ="button2";
      }
      else{
        if (items[0]=='true'){
          this._t24 = "ไม่ว่าง";
        this._h24="button2";
        }
        else if(items[2]=="true"){
          this._t24 = "*ไม่ว่าง";
          this._h24="button4";
        }
        else{
          this._t24 = "ว่าง";
          this._h24="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t25 = "ไม่ว่าง";
        this._h25="button2";
      }
      else{
        if (items[0]=='true'){
          this._t25 = "ไม่ว่าง";
        this._h25="button2";
        }
        else if(items[2]=="true"){
          this._t25 = "*ไม่ว่าง";
          this._h25="button4";
        }
        else{
          this._t25 = "ว่าง";
          this._h25="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t26 = "ไม่ว่าง";
        this._h26="button2";
      }
      else{
        if (items[0]=='true'){
          this._t26 = "ไม่ว่าง";
        this._h26="button2";
        }
        else if(items[2]=="true"){
          this._t26 = "*ไม่ว่าง";
          this._h26="button4";
        }
        else{
          this._t26 = "ว่าง";
          this._h26="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t27 = "ไม่ว่าง";
        this._h27="button2";
      }
      else{
        if (items[0]=='true'){
          this._t27 = "ไม่ว่าง";
        this._h27="button2";
        }
        else if(items[2]=="true"){
          this._t27 = "*ไม่ว่าง";
          this._h27="button4";
        }
        else{
          this._t27 = "ว่าง";
          this._h27="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t28 = "ไม่ว่าง";
        this._h28="button2";
      }
      else{
        if (items[0]=='true'){
          this._t28 = "ไม่ว่าง";
        this._h28="button2";
        }
        else if(items[2]=="true"){
          this._t28 = "*ไม่ว่าง";
          this._h28="button4";
        }
        else{
          this._t28 = "ว่าง";
          this._h28="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t29 = "ไม่ว่าง";
        this._h29="button2";
      }
      else{
        if (items[0]=='true'){
          this._t29 = "ไม่ว่าง";
        this._h29="button2";
        }
        else if(items[2]=="true"){
          this._t29 = "*ไม่ว่าง";
          this._h29="button4";
        }
        else{
          this._t29 = "ว่าง";
          this._h29="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b9/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t20 = "ไม่ว่าง";
        this._h20="button2";
      }
      else{
        if (items[0]=='true'){
          this._t20 = "ไม่ว่าง";
        this._h20="button2";
        }
        else if(items[2]=="true"){
          this._t20 = "*ไม่ว่าง";
          this._h20="button4";
        }
        else{
          this._t20 = "ว่าง";
          this._h20="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t31 = "ไม่ว่าง";
        this._h31="button2";
      }
      else{
        if (items[0]=='true'){
          this._t31 = "ไม่ว่าง";
        this._h31="button2";
        }
        else if(items[2]=="true"){
          this._t31 = "*ไม่ว่าง";
          this._h31="button4";
        }
        else{
          this._t31 = "ว่าง";
          this._h31="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t32 = "ไม่ว่าง";
        this._h32="button2";
      }
      else{
        if (items[0]=='true'){
          this._t32 = "ไม่ว่าง";
        this._h32="button2";
        }
        else if(items[2]=="true"){
          this._t32 = "*ไม่ว่าง";
          this._h32="button4";
        }
        else{
          this._t32 = "ว่าง";
          this._h32="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t33 = "ไม่ว่าง";
        this._h33="button2";
      }
      else{
        if (items[0]=='true'){
          this._t33 = "ไม่ว่าง";
        this._h33="button2";
        }
        else if(items[2]=="true"){
          this._t33 = "*ไม่ว่าง";
          this._h33="button4";
        }
        else{
          this._t33 = "ว่าง";
          this._h33="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t34 = "ไม่ว่าง";
        this._h34="button2";
      }
      else{
        if (items[0]=='true'){
          this._t34 = "ไม่ว่าง";
        this._h34="button2";
        }
        else if(items[2]=="true"){
          this._t34 = "*ไม่ว่าง";
          this._h34="button4";
        }
        else{
          this._t34 = "ว่าง";
          this._h34="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t35 = "ไม่ว่าง";
        this._h35="button2";
      }
      else{
        if (items[0]=='true'){
          this._t35 = "ไม่ว่าง";
        this._h35="button2";
        }
        else if(items[2]=="true"){
          this._t35 = "*ไม่ว่าง";
          this._h35="button4";
        }
        else{
          this._t35 = "ว่าง";
          this._h35="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t36 = "ไม่ว่าง";
        this._h36="button2";
      }
      else{
        if (items[0]=='true'){
          this._t36 = "ไม่ว่าง";
        this._h36="button2";
        }
        else if(items[2]=="true"){
          this._t36 = "*ไม่ว่าง";
          this._h36="button4";
        }
        else{
          this._t36 = "ว่าง";
          this._h36="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t37 = "ไม่ว่าง";
        this._h37="button2";
      }
      else{
        if (items[0]=='true'){
          this._t37 = "ไม่ว่าง";
        this._h37="button2";
        }
        else if(items[2]=="true"){
          this._t37 = "*ไม่ว่าง";
          this._h37="button4";
        }
        else{
          this._t37 = "ว่าง";
          this._h37="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t38 = "ไม่ว่าง";
        this._h38="button2";
      }
      else{
        if (items[0]=='true'){
          this._t38 = "ไม่ว่าง";
        this._h38="button2";
        }
        else if(items[2]=="true"){
          this._t38 = "*ไม่ว่าง";
          this._h38="button4";
        }
        else{
          this._t38 = "ว่าง";
          this._h38="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t39 = "ไม่ว่าง";
        this._h39="button2";
      }
      else{
        if (items[0]=='true'){
          this._t39 = "ไม่ว่าง";
        this._h39="button2";
        }
        else if(items[2]=="true"){
          this._t39 = "*ไม่ว่าง";
          this._h39="button4";
        }
        else{
          this._t39 = "ว่าง";
          this._h39="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b10/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t30 = "ไม่ว่าง";
        this._h30="button2";
      }
      else{
        if (items[0]=='true'){
          this._t30 = "ไม่ว่าง";
        this._h30="button2";
        }
        else if(items[2]=="true"){
          this._t30 = "*ไม่ว่าง";
          this._h30="button4";
        }
        else{
          this._t30 = "ว่าง";
          this._h30="button";
        }
      
      
      }
    });
  }

}
