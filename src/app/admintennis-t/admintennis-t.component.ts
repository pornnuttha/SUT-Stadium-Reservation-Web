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
  selector: 'app-admintennis-t',
  templateUrl: './admintennis-t.component.html',
  styleUrls: ['./admintennis-t.component.css']
})
export class AdmintennisTComponent implements OnInit {

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

     logout(){
      this.afAuth.auth.signOut();
    }
   
    onClick(time_table: Timetable, b, time) {
      console.log(time_table, b, time)
      time_table.status = "true";
      time_table.confirm = "false";
      let range = String(time)
  
      let dataSet: any;
      let dataSet2: any;
     
      this._object = this.afb.object('time_table/tennis/' + b + '/' + this._datetime).valueChanges();
      this._object.subscribe(data => {
        console.log(data)
        if (data == null) {
          this.openDialog1(time,b);
          // ยังไม่มีรายการ อะไรเลยในวันนั้น
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
           
            time = null;
            this.break();
          }else{
            //จอง
            
            this.openDialog1(time,b);
            console.log('จอง')
            time = null;
            this.break();
          }
        }
      })
    }
    break(){
      this.break();
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
    openDialog(timeinput:String ,b:string): void {
      const dialogRef = this.dialog.open(CancelComponent,{width: '400px',data:{time: timeinput,stadium:b,sport: "tennis"}} );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }
  
    openDialog1(timeinput:String ,b:string): void {
      const dialogRef = this.dialog.open(ReservationComponent,{width: '400px',data:{time: timeinput,stadium:b,sport: "tennis"}} );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });
    }

    _t11 : String;
    _t12 : String;
    _t13 : String;
    _t14 : String;
    _t15 : String;

    _t21 : String;
    _t22 : String;
    _t23 : String;
    _t24 : String;
    _t25 : String;
    
    _t31 : String;
    _t32 : String;
    _t33 : String;
    _t34 : String;
    _t35 : String;
    
    _t41 : String;
    _t42 : String;
    _t43 : String;
    _t44 : String;
    _t45 : String;
   
    _t51 : String;
    _t52 : String;
    _t53 : String;
    _t54 : String;
    _t55 : String;
    
    _t61 : String;
    _t62 : String;
    _t63 : String;
    _t64 : String;
    _t65 : String;
   
    _t71 : String;
    _t72 : String;
    _t73 : String;
    _t74 : String;
    _t75 : String;
    

    _h11 : String;
    _h12 : String;
    _h13 : String;
    _h14 : String;
    _h15 : String;
   
  
    _h21 : String;
    _h22 : String;
    _h23 : String;
    _h24 : String;
    _h25 : String;
    
  
    _h31 : String;
    _h32 : String;
    _h33 : String;
    _h34 : String;
    _h35 : String;
   
  
    _h41 : String;
    _h42 : String;
    _h43 : String;
    _h44 : String;
    _h45 : String;
   
  
    _h51 : String;
    _h52 : String;
    _h53 : String;
    _h54 : String;
    _h55 : String;
   
  
    _h61 : String;
    _h62 : String;
    _h63 : String;
    _h64 : String;
    _h65 : String;
   
    _h71 : String;
    _h72 : String;
    _h73 : String;
    _h74 : String;
    _h75 : String;
   
    
    _h : String;
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
   
    
    this._t21="รอสักครู่";
    this._t22="รอสักครู่";
    this._t23="รอสักครู่";
    this._t24="รอสักครู่";
    this._t25="รอสักครู่";
    

    this._t31="รอสักครู่";
    this._t32="รอสักครู่";
    this._t33="รอสักครู่";
    this._t34="รอสักครู่";
    this._t35="รอสักครู่";
    

    this._t41="รอสักครู่";
    this._t42="รอสักครู่";
    this._t43="รอสักครู่";
    this._t44="รอสักครู่";
    this._t45="รอสักครู่";
    
    this._t51="รอสักครู่";
    this._t52="รอสักครู่";
    this._t53="รอสักครู่";
    this._t54="รอสักครู่";
    this._t55="รอสักครู่";
   

    this._t61="รอสักครู่";
    this._t62="รอสักครู่";
    this._t63="รอสักครู่";
    this._t64="รอสักครู่";
    this._t65="รอสักครู่";
   

    this._t71="รอสักครู่";
    this._t72="รอสักครู่";
    this._t73="รอสักครู่";
    this._t74="รอสักครู่";
    this._t75="รอสักครู่";
   
    this._h="button";

    this._h11="button3";
    this._h12="button3";
    this._h13="button3";
    this._h14="button3";
    this._h15="button3";
    

    this._h21="button3";
    this._h22="button3";
    this._h23="button3";
    this._h24="button3";
    this._h25="button3";
   

    this._h31="button3";
    this._h32="button3";
    this._h33="button3";
    this._h34="button3";
    this._h35="button3";
    

    this._h41="button3";
    this._h42="button3";
    this._h43="button3";
    this._h44="button3";
    this._h45="button3";
   

    this._h51="button3";
    this._h52="button3";
    this._h53="button3";
    this._h54="button3";
    this._h55="button3";
   

    this._h61="button3";
    this._h62="button3";
    this._h63="button3";
    this._h64="button3";
    this._h65="button3";
    
    this._h71="button3";
    this._h72="button3";
    this._h73="button3";
    this._h74="button3";
    this._h75="button3";
    


    await this.afb.list('time_table/tennis/t1/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t1/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t1/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t1/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t1/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

    
    await this.afb.list('time_table/tennis/t2/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t2/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t2/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t2/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t2/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

   

    await this.afb.list('time_table/tennis/t3/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t3/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t3/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t3/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t3/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

    

    await this.afb.list('time_table/tennis/t4/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t4/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t4/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t4/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t4/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

    

    await this.afb.list('time_table/tennis/t5/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t5/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t5/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t5/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t5/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

    
    await this.afb.list('time_table/tennis/t6/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t6/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t6/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t6/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t6/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

    
    await this.afb.list('time_table/tennis/t7/'+ this._datetime+'/16:00-17:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t7/'+ this._datetime+'/17:00-18:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t7/'+ this._datetime+'/18:00-19:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t7/'+ this._datetime+'/19:00-20:00').valueChanges().subscribe(items => {
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

    await this.afb.list('time_table/tennis/t7/'+ this._datetime+'/20:00-21:00').valueChanges().subscribe(items => {
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

    
  }

}
