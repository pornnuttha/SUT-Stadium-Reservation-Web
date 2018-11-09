import { Component, OnInit } from '@angular/core';
import { Timetable } from '../../environments/table.config';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { auth, UserInfo } from 'firebase';
import { Breakpoints } from '@angular/cdk/layout';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CancelComponent } from '../cancel/cancel.component';
import { ReservationComponent } from '../reservation/reservation.component';

@Component({
  selector: 'app-adminbad1-t',
  templateUrl: './adminbad1-t.component.html',
  styleUrls: ['./adminbad1-t.component.css']
})
export class Adminbad1TComponent implements OnInit {
  datalist: AngularFireList<any>;
  items: AngularFireList<any[]>;

  time_table = {} as Timetable;
  data: any[];
  test: Array<any>;
  _date = new Date().getDate();
  _month = new Date().getMonth() + 1;
  _year = new Date().getFullYear();
  _object: any;
  _datetime = this._year + "-" + this._month + "-" + this._date;
  closeResult: String

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private afb: AngularFireDatabase,
    private modalService: NgbModal,
    public dialog: MatDialog,
  
    ) {

  }
  type(){
    this.router.navigate(['/typeadmin'], );
  }
  tennis(){
    this.router.navigate(['/AdmintennisT'], );
  }
  badminton1(){
    this.router.navigate(['/Adminbad1T'], );
  }
  badminton2(){
    this.router.navigate(['/Adminbad2T'], );
  }
  flowchartb(){
    this.router.navigate(['/AdminbadmintonF'], );
  }
  flowchartt(){
    this.router.navigate(['/AdmintennisF'], );
  }
  register(){
    this.router.navigate(['/registerforem'], );
  }
  flowchartbm(){
    this.router.navigate(['/Adminbadfm'], );
  }
  
  flowcharttm(){
    this.router.navigate(['/Admintennisfm'], );
  }
  onClick(time_table: Timetable, b, time) {
    console.log(time_table, b, time)
    time_table.status = "true";
    time_table.confirm = "false";
    let range = String(time)

    let dataSet: any;
    let dataSet2: any;
    //var status;s
    // this._object = this.afb.object('time_table/badminton/' + b + '/' + this._datetime).valueChanges();
    // this._object.subscribe(data => {
    //   console.log(data)
    //   if (data == null) {
    //     // ยังไม่มีรายการ อะไรเลยในวันนั้น
    //     this.router.navigate(['/reservation/badminton/' + b + '/' + range]);
    //     time = null;
    //   } else {
    //     //มีแล้ว
    //     let key = Object.keys(data);
        
    //     let list = [];
    //     for (var i = 0; i < key.length; i++) {
    //       list.push(key[i]);
    //     }

    //     if(list.includes(range)){
    //       //ยกเลิก
    //       console.log('ยกเลิก')
    //       this.openDialog(time,b);
    //       //this.router.navigate(['/cancel/badminton/' + b + '/' + range]);
    //       time = null;
          
    //     }else{
    //       //จอง

    //       this.openDialog1(time,b);
          
    //       //this.router.navigate(['/reservation/badminton/' + b + '/' + range]);
    //       console.log('จอง')
    //       time = null;
    //     }
    //   }
    // })

    
    // this.afb.object('time_table/badminton/' + b + '/' + this._datetime).valueChanges().subscribe(
    //   data => {
    //     //dataSet = data;
    //     if (data == null) {
    //      this.openDialog1(time,b);
    //       //this.router.navigate(['/reservation/badminton/' + b + '/' + range]);
    //       console.log('จอง')
    //       time = null;
    //     } else {
    //       this.afb.object('time_table/badminton/' + b + '/' + this._datetime + '/' + range).valueChanges().subscribe(
    //         data2 => {
    //           if (data2 !== null) {
    //             console.log('ยกเลิก')
    //             this.openDialog(time,b);
    //             //this.router.navigate(['/cancel/badminton/' + b + '/' + range]);
    //             time = null;
    //           } 
    //         })
    //     }

    //   }
    // )

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
        }
        else{
          //จอง
          //this.router.navigate(['/reservation/badminton/' + b + '/' + range]);
          this.openDialog1(time,b);
          console.log('จอง')
          time = null;
          this.break();
          
        }
      }
      //this.dialog.closeAll();
    })

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
  _t41 : String;
  _t42 : String;
  _t43 : String;
  _t44 : String;
  _t45 : String;
  _t46 : String;
  _t47 : String;
  _t48 : String;
  _t49 : String;
  _t40 : String;
  _t51 : String;
  _t52 : String;
  _t53 : String;
  _t54 : String;
  _t55 : String;
  _t56 : String;
  _t57 : String;
  _t58 : String;
  _t59 : String;
  _t50 : String;
  _t61 : String;
  _t62 : String;
  _t63 : String;
  _t64 : String;
  _t65 : String;
  _t66 : String;
  _t67 : String;
  _t68 : String;
  _t69 : String;
  _t60 : String;
  _t71 : String;
  _t72 : String;
  _t73 : String;
  _t74 : String;
  _t75 : String;
  _t76 : String;
  _t77 : String;
  _t78 : String;
  _t79 : String;
  _t70 : String;

  _h : String;
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

  _h41 : String;
  _h42 : String;
  _h43 : String;
  _h44 : String;
  _h45 : String;
  _h46 : String;
  _h47 : String;
  _h48 : String;
  _h49 : String;
  _h40 : String;

  _h51 : String;
  _h52 : String;
  _h53 : String;
  _h54 : String;
  _h55 : String;
  _h56 : String;
  _h57 : String;
  _h58 : String;
  _h59 : String;
  _h50 : String;

  _h61 : String;
  _h62 : String;
  _h63 : String;
  _h64 : String;
  _h65 : String;
  _h66 : String;
  _h67 : String;
  _h68 : String;
  _h69 : String;
  _h60 : String;

  _h71 : String;
  _h72 : String;
  _h73 : String;
  _h74 : String;
  _h75 : String;
  _h76 : String;
  _h77 : String;
  _h78 : String;
  _h79 : String;
  _h70 : String;

  async ngOnInit() {
    
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

    this._t41="รอสักครู่";
    this._t42="รอสักครู่";
    this._t43="รอสักครู่";
    this._t44="รอสักครู่";
    this._t45="รอสักครู่";
    this._t46="รอสักครู่";
    this._t47="รอสักครู่";
    this._t48="รอสักครู่";
    this._t49="รอสักครู่";
    this._t40="รอสักครู่";

    this._t51="รอสักครู่";
    this._t52="รอสักครู่";
    this._t53="รอสักครู่";
    this._t54="รอสักครู่";
    this._t55="รอสักครู่";
    this._t56="รอสักครู่";
    this._t57="รอสักครู่";
    this._t58="รอสักครู่";
    this._t59="รอสักครู่";
    this._t50="รอสักครู่";

    this._t61="รอสักครู่";
    this._t62="รอสักครู่";
    this._t63="รอสักครู่";
    this._t64="รอสักครู่";
    this._t65="รอสักครู่";
    this._t66="รอสักครู่";
    this._t67="รอสักครู่";
    this._t68="รอสักครู่";
    this._t69="รอสักครู่";
    this._t60="รอสักครู่";

    this._t71="รอสักครู่";
    this._t72="รอสักครู่";
    this._t73="รอสักครู่";
    this._t74="รอสักครู่";
    this._t75="รอสักครู่";
    this._t76="รอสักครู่";
    this._t77="รอสักครู่";
    this._t78="รอสักครู่";
    this._t79="รอสักครู่";
    this._t70="รอสักครู่";

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

    this._h41="button3";
    this._h42="button3";
    this._h43="button3";
    this._h44="button3";
    this._h45="button3";
    this._h46="button3";
    this._h47="button3";
    this._h48="button3";
    this._h49="button3";
    this._h40="button3";

    this._h51="button3";
    this._h52="button3";
    this._h53="button3";
    this._h54="button3";
    this._h55="button3";
    this._h56="button3";
    this._h57="button3";
    this._h58="button3";
    this._h59="button3";
    this._h50="button3";

    this._h61="button3";
    this._h62="button3";
    this._h63="button3";
    this._h64="button3";
    this._h65="button3";
    this._h66="button3";
    this._h67="button3";
    this._h68="button3";
    this._h69="button3";
    this._h60="button3";

    this._h71="button3";
    this._h72="button3";
    this._h73="button3";
    this._h74="button3";
    this._h75="button3";
    this._h76="button3";
    this._h77="button3";
    this._h78="button3";
    this._h79="button3";
    this._h70="button3";

      await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b1/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b2/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b3/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t41 = "ไม่ว่าง";
        this._h41="button2";
      }
      else{
        if (items[0]=='true'){
          this._t41 = "ไม่ว่าง";
        this._h41="button2";
        }
        else if(items[2]=="true"){
          this._t41 = "*ไม่ว่าง";
          this._h41="button4";
        }
        else{
          this._t41 = "ว่าง";
          this._h41="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t42 = "ไม่ว่าง";
        this._h42="button2";
      }
      else{
        if (items[0]=='true'){
          this._t42 = "ไม่ว่าง";
        this._h42="button2";
        }
        else if(items[2]=="true"){
          this._t42 = "*ไม่ว่าง";
          this._h42="button4";
        }
        else{
          this._t42 = "ว่าง";
          this._h42="button";
        }
      
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t43 = "ไม่ว่าง";
        this._h43="button2";
      }
      else{
        if (items[0]=='true'){
          this._t43 = "ไม่ว่าง";
        this._h43="button2";
        }
        else if(items[2]=="true"){
          this._t43 = "*ไม่ว่าง";
          this._h43="button4";
        }
        else{
          this._t43 = "ว่าง";
          this._h43="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t44 = "ไม่ว่าง";
        this._h44="button2";
      }
      else{
        if (items[0]=='true'){
          this._t44 = "ไม่ว่าง";
        this._h44="button2";
        }
        else if(items[2]=="true"){
          this._t44 = "*ไม่ว่าง";
          this._h44="button4";
        }
        else{
          this._t44 = "ว่าง";
          this._h44="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t45 = "ไม่ว่าง";
        this._h45="button2";
      }
      else{
        if (items[0]=='true'){
          this._t45 = "ไม่ว่าง";
        this._h45="button2";
        }
        else if(items[2]=="true"){
          this._t45 = "*ไม่ว่าง";
          this._h45="button4";
        }
        else{
          this._t45 = "ว่าง";
          this._h45="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t46 = "ไม่ว่าง";
        this._h46="button2";
      }
      else{
        if (items[0]=='true'){
          this._t46 = "ไม่ว่าง";
        this._h46="button2";
        }
        else if(items[2]=="true"){
          this._t46 = "*ไม่ว่าง";
          this._h46="button4";
        }
        else{
          this._t46 = "ว่าง";
          this._h46="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t47 = "ไม่ว่าง";
        this._h47="button2";
      }
      else{
        if (items[0]=='true'){
          this._t47 = "ไม่ว่าง";
        this._h47="button2";
        }
        else if(items[2]=="true"){
          this._t47 = "*ไม่ว่าง";
          this._h47="button4";
        }
        else{
          this._t47= "ว่าง";
          this._h47="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t48 = "ไม่ว่าง";
        this._h48="button2";
      }
      else{
        if (items[0]=='true'){
          this._t48 = "ไม่ว่าง";
        this._h48="button2";
        }
        else if(items[2]=="true"){
          this._t48 = "*ไม่ว่าง";
          this._h48="button4";
        }
        else{
          this._t48 = "ว่าง";
          this._h48="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t49 = "ไม่ว่าง";
        this._h49="button2";
      }
      else{
        if (items[0]=='true'){
          this._t49 = "ไม่ว่าง";
        this._h49="button2";
        }
        else if(items[2]=="true"){
          this._t49 = "*ไม่ว่าง";
          this._h49="button4";
        }
        else{
          this._t49 = "ว่าง";
          this._h49="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b4/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t40 = "ไม่ว่าง";
        this._h40="button2";
      }
      else{
        if (items[0]=='true'){
          this._t40 = "ไม่ว่าง";
        this._h40="button2";
        }
        else if(items[2]=="true"){
          this._t40 = "*ไม่ว่าง";
          this._h40="button4";
        }
        else{
          this._t40 = "ว่าง";
          this._h40="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t51 = "ไม่ว่าง";
        this._h51="button2";
      }
      else{
        if (items[0]=='true'){
          this._t51 = "ไม่ว่าง";
        this._h51="button2";
        }
        else if(items[2]=="true"){
          this._t51 = "*ไม่ว่าง";
          this._h51="button4";
        }
        else{
          this._t51 = "ว่าง";
          this._h51="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t52 = "ไม่ว่าง";
        this._h52="button2";
      }
      else{
        if (items[0]=='true'){
          this._t52 = "ไม่ว่าง";
        this._h52="button2";
        }
        else if(items[2]=="true"){
          this._t52 = "*ไม่ว่าง";
          this._h52="button4";
        }
        else{
          this._t52 = "ว่าง";
          this._h52="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t53 = "ไม่ว่าง";
        this._h53="button2";
      }
      else{
        if (items[0]=='true'){
          this._t53 = "ไม่ว่าง";
        this._h53="button2";
        }
        else if(items[2]=="true"){
          this._t53 = "*ไม่ว่าง";
          this._h53="button4";
        }
        else{
          this._t53 = "ว่าง";
          this._h53="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t54 = "ไม่ว่าง";
        this._h54="button2";
      }
      else{
        if (items[0]=='true'){
          this._t54 = "ไม่ว่าง";
        this._h54="button2";
        }
        else if(items[2]=="true"){
          this._t54 = "*ไม่ว่าง";
          this._h54="button4";
        }
        else{
          this._t54 = "ว่าง";
          this._h54="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t55 = "ไม่ว่าง";
        this._h55="button2";
      }
      else{
        if (items[0]=='true'){
          this._t55 = "ไม่ว่าง";
        this._h55="button2";
        }
        else if(items[2]=="true"){
          this._t55 = "*ไม่ว่าง";
          this._h55="button4";
        }
        else{
          this._t55 = "ว่าง";
          this._h55="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t56 = "ไม่ว่าง";
        this._h56="button2";
      }
      else{
        if (items[0]=='true'){
          this._t56 = "ไม่ว่าง";
        this._h56="button2";
        }
        else if(items[2]=="true"){
          this._t56 = "*ไม่ว่าง";
          this._h56="button4";
        }
        else{
          this._t56 = "ว่าง";
          this._h56="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t57 = "ไม่ว่าง";
        this._h57="button2";
      }
      else{
        if (items[0]=='true'){
          this._t57 = "ไม่ว่าง";
        this._h57="button2";
        }
        else if(items[2]=="true"){
          this._t57 = "*ไม่ว่าง";
          this._h57="button4";
        }
        else{
          this._t57 = "ว่าง";
          this._h57="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t58 = "ไม่ว่าง";
        this._h58="button2";
      }
      else{
        if (items[0]=='true'){
          this._t58 = "ไม่ว่าง";
        this._h58="button2";
        }
        else if(items[2]=="true"){
          this._t58 = "*ไม่ว่าง";
          this._h58="button4";
        }
        else{
          this._t58 = "ว่าง";
          this._h58="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t59 = "ไม่ว่าง";
        this._h59="button2";
      }
      else{
        if (items[0]=='true'){
          this._t59 = "ไม่ว่าง";
        this._h59="button2";
        }
        else if(items[2]=="true"){
          this._t59 = "*ไม่ว่าง";
          this._h59="button4";
        }
        else{
          this._t59 = "ว่าง";
          this._h59="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b5/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t50 = "ไม่ว่าง";
        this._h50="button2";
      }
      else{
        if (items[0]=='true'){
          this._t50 = "ไม่ว่าง";
        this._h50="button2";
        }
        else if(items[2]=="true"){
          this._t50 = "*ไม่ว่าง";
          this._h50="button4";
        }
        else{
          this._t50 = "ว่าง";
          this._h50="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t61 = "ไม่ว่าง";
        this._h61="button2";
      }
      else{
        if (items[0]=='true'){
          this._t61 = "ไม่ว่าง";
        this._h61="button2";
        }
        else if(items[2]=="true"){
          this._t61 = "*ไม่ว่าง";
          this._h61="button4";
        }
        else{
          this._t61 = "ว่าง";
          this._h61="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t62 = "ไม่ว่าง";
        this._h62="button2";
      }
      else{
        if (items[0]=='true'){
          this._t62 = "ไม่ว่าง";
        this._h62="button2";
        }
        else if(items[2]=="true"){
          this._t62 = "*ไม่ว่าง";
          this._h62="button4";
        }
        else{
          this._t62 = "ว่าง";
          this._h62="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t63 = "ไม่ว่าง";
        this._h63="button2";
      }
      else{
        if (items[0]=='true'){
          this._t63 = "ไม่ว่าง";
        this._h63="button2";
        }
        else if(items[2]=="true"){
          this._t63 = "*ไม่ว่าง";
          this._h63="button4";
        }
        else{
          this._t63 = "ว่าง";
          this._h63="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t64 = "ไม่ว่าง";
        this._h64="button2";
      }
      else{
        if (items[0]=='true'){
          this._t64 = "ไม่ว่าง";
        this._h64="button2";
        }
        else if(items[2]=="true"){
          this._t64 = "*ไม่ว่าง";
          this._h64="button4";
        }
        else{
          this._t64 = "ว่าง";
          this._h64="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t65 = "ไม่ว่าง";
        this._h65="button2";
      }
      else{
        if (items[0]=='true'){
          this._t65 = "ไม่ว่าง";
        this._h65="button2";
        }
        else if(items[2]=="true"){
          this._t65 = "*ไม่ว่าง";
          this._h65="button4";
        }
        else{
          this._t65 = "ว่าง";
          this._h65="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t66 = "ไม่ว่าง";
        this._h66="button2";
      }
      else{
        if (items[0]=='true'){
          this._t66 = "ไม่ว่าง";
        this._h66="button2";
        }
        else if(items[2]=="true"){
          this._t66 = "*ไม่ว่าง";
          this._h66="button4";
        }
        else{
          this._t66 = "ว่าง";
          this._h66="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t67 = "ไม่ว่าง";
        this._h67="button2";
      }
      else{
        if (items[0]=='true'){
          this._t67 = "ไม่ว่าง";
        this._h67="button2";
        }
        else if(items[2]=="true"){
          this._t67 = "*ไม่ว่าง";
          this._h67="button4";
        }
        else{
          this._t67 = "ว่าง";
          this._h67="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t68 = "ไม่ว่าง";
        this._h68="button2";
      }
      else{
        if (items[0]=='true'){
          this._t68 = "ไม่ว่าง";
        this._h68="button2";
        }
        else if(items[2]=="true"){
          this._t68 = "*ไม่ว่าง";
          this._h68="button4";
        }
        else{
          this._t68 = "ว่าง";
          this._h68="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t69 = "ไม่ว่าง";
        this._h69="button2";
      }
      else{
        if (items[0]=='true'){
          this._t69 = "ไม่ว่าง";
        this._h69="button2";
        }
        else if(items[2]=="true"){
          this._t69 = "*ไม่ว่าง";
          this._h69="button4";
        }
        else{
          this._t69 = "ว่าง";
          this._h69="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b6/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t60 = "ไม่ว่าง";
        this._h60="button2";
      }
      else{
        if (items[0]=='true'){
          this._t60 = "ไม่ว่าง";
        this._h60="button2";
        }
        else if(items[2]=="true"){
          this._t60 = "*ไม่ว่าง";
          this._h60="button4";
        }
        else{
          this._t60 = "ว่าง";
          this._h60="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/16:00-16:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t71 = "ไม่ว่าง";
        this._h71="button2";
      }
      else{
        if (items[0]=='true'){
          this._t71 = "ไม่ว่าง";
        this._h71="button2";
        }
        else if(items[2]=="true"){
          this._t71 = "*ไม่ว่าง";
          this._h71="button4";
        }
        else{
          this._t71 = "ว่าง";
          this._h71="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/16:30-17:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t72 = "ไม่ว่าง";
        this._h72="button2";
      }
      else{
        if (items[0]=='true'){
          this._t72 = "ไม่ว่าง";
        this._h72="button2";
        }
        else if(items[2]=="true"){
          this._t72 = "*ไม่ว่าง";
          this._h72="button4";
        }
        else{
          this._t72 = "ว่าง";
          this._h72="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/17:00-17:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t73 = "ไม่ว่าง";
        this._h73="button2";
      }
      else{
        if (items[0]=='true'){
          this._t73 = "ไม่ว่าง";
        this._h73="button2";
        }
        else if(items[2]=="true"){
          this._t73 = "*ไม่ว่าง";
          this._h73="button4";
        }
        else{
          this._t73 = "ว่าง";
          this._h73="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/17:30-18:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t74 = "ไม่ว่าง";
        this._h74="button2";
      }
      else{
        if (items[0]=='true'){
          this._t74 = "ไม่ว่าง";
        this._h74="button2";
        }
        else if(items[2]=="true"){
          this._t74 = "*ไม่ว่าง";
          this._h74="button4";
        }
        else{
          this._t74 = "ว่าง";
          this._h74="button";
        }
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/18:00-18:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t75 = "ไม่ว่าง";
        this._h75="button2";
      }
      else{
        if (items[0]=='true'){
          this._t75 = "ไม่ว่าง";
        this._h75="button2";
        }
        else if(items[2]=="true"){
          this._t75 = "*ไม่ว่าง";
          this._h75="button4";
        }
        else{
          this._t75 = "ว่าง";
          this._h75="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/18:30-19:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t76 = "ไม่ว่าง";
        this._h76="button2";
      }
      else{
        if (items[0]=='true'){
          this._t76 = "ไม่ว่าง";
        this._h76="button2";
        }
        else if(items[2]=="true"){
          this._t76 = "*ไม่ว่าง";
          this._h76="button4";
        }
        else{
          this._t76 = "ว่าง";
          this._h76="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/19:00-19:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t77 = "ไม่ว่าง";
        this._h77="button2";
      }
      else{
        if (items[0]=='true'){
          this._t77 = "ไม่ว่าง";
        this._h77="button2";
        }
        else if(items[2]=="true"){
          this._t77 = "*ไม่ว่าง";
          this._h77="button4";
        }
        else{
          this._t77 = "ว่าง";
          this._h77="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/19:30-20:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t78 = "ไม่ว่าง";
        this._h78="button2";
      }
      else{
        if (items[0]=='true'){
          this._t78 = "ไม่ว่าง";
        this._h78="button2";
        }
        else if(items[2]=="true"){
          this._t78 = "*ไม่ว่าง";
          this._h78="button4";
        }
        else{
          this._t78 = "ว่าง";
          this._h78="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/20:00-20:30').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t79 = "ไม่ว่าง";
        this._h79="button2";
      }
      else{
        if (items[0]=='true'){
          this._t79 = "ไม่ว่าง";
        this._h79="button2";
        }
        else if(items[2]=="true"){
          this._t79 = "*ไม่ว่าง";
          this._h79="button4";
        }
        else{
          this._t79 = "ว่าง";
          this._h79="button";
        }
      
      }
    });

    await this.afb.list('time_table/badminton/b7/'+ this._datetime+'/20:30-21:00').valueChanges().subscribe(items => {
      console.log(items[1]);
      console.log(items[2]);
      if(items[1]=="true"){
        this._t70 = "ไม่ว่าง";
        this._h70="button2";
      }
      else{
        if (items[0]=='true'){
          this._t70 = "ไม่ว่าง";
        this._h70="button2";
        }
        else if(items[2]=="true"){
          this._t70 = "*ไม่ว่าง";
          this._h70="button4";
        }
        else{
          this._t70 = "ว่าง";
          this._h70="button";
        }
      }
    });
  }


}

