import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Timetable } from '../../environments/table.config';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-tennisflowchart',
  templateUrl: './tennisflowchart.component.html',
  styleUrls: ['./tennisflowchart.component.css']
})
export class TennisflowchartComponent implements OnInit {
  time_table = {} as Timetable;
 
  typeChart: any;
  dataChart: any;
  optionsChart: any;
  _date = new Date().getDate();
  _month = new Date().getMonth() + 1;
  _year = new Date().getFullYear();
  _ch1 : number;
  _ch2 : number;
  _ch3 : number;
  _ch4 : number;
  _ch5 : number;
  _ch6 : number;
  _ch7 : number;
  _object: any;
  _datetime = this._year + "-" + this._month + "-" + this._date;
  _date2 : String;
  i:number;
  _i:String;
  __i:number;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private afb: AngularFireDatabase,
  ) { }
  logout(){
    this.afAuth.auth.signOut();
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
  async ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user =>{
      if(user){

      }
      else{
        this.afAuth.auth.signOut();
        this.router.navigate([''], );
      }
    });
    this.typeChart = 'line';
    this._ch1=0;
    this._ch2=0;
    this._ch3=0;
    this._ch4=0;
    this._ch5=0;
    this._ch6=0;
    this._ch7=0;
   
    await this._countB1();
    await this._countB2();
    await this._countB3();
    await  this._countB4();
    await this._countB5();
    await this._countB6();
    await this._countB7();
    this._show();

  }
    async _countB1(){
      this._ch1=0;
      await this.afb.list('time_table/tennis/t1/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
       
      });
      await this.afb.list('time_table/tennis/t1/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
       
      });
      await this.afb.list('time_table/tennis/t1/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
       
      });
      await this.afb.list('time_table/tennis/t1/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
       
      });
      await this.afb.list('time_table/tennis/t1/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
       
      });
     
    }
  
    async _countB2(){
      this._ch2=0;
      await this.afb.list('time_table/tennis/t2/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
       
      });
      await this.afb.list('time_table/tennis/t2/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
       
      });
      await this.afb.list('time_table/tennis/t2/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
       
      });
      await this.afb.list('time_table/tennis/t2/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
       
      });
      await this.afb.list('time_table/tennis/t2/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
       
      });
     
    }
  
    async _countB3(){
      this._ch3=0;
      await this.afb.list('time_table/tennis/t3/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
       
      });
      await this.afb.list('time_table/tennis/t3/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
       
      });
      await this.afb.list('time_table/tennis/t3/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
       
      });
      await this.afb.list('time_table/tennis/t3/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
       
      });
      await this.afb.list('time_table/tennis/t3/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
       
      });
    }
  
    async _countB4(){
      this._ch4=0;
      await this.afb.list('time_table/tennis/t4/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
       
      });
      await this.afb.list('time_table/tennis/t4/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
       
      });
      await this.afb.list('time_table/tennis/t4/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
       
      });
      await this.afb.list('time_table/tennis/t4/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
       
      });
      await this.afb.list('time_table/tennis/t4/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
       
      });
    }
   
    async _countB5(){
      this._ch5=0;
      await this.afb.list('time_table/tennis/t5/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch5=this._ch5+1;
        }
        console.log(this._ch5);
       
      });
      await this.afb.list('time_table/tennis/t5/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch5=this._ch5+1;
        }
        console.log(this._ch5);
       
      });
      await this.afb.list('time_table/tennis/t5/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch5=this._ch5+1;
        }
        console.log(this._ch5);
       
      });
      await this.afb.list('time_table/tennis/t5/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch5=this._ch5+1;
        }
        console.log(this._ch5);
       
      });
      await this.afb.list('time_table/tennis/t5/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch5=this._ch5+1;
        }
        console.log(this._ch5);
       
      });
    }

    async _countB6(){
      this._ch6=0;
      await this.afb.list('time_table/tennis/t6/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
       
      });
      await this.afb.list('time_table/tennis/t6/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
       
      });
      await this.afb.list('time_table/tennis/t6/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
       
      });
      await this.afb.list('time_table/tennis/t6/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
       
      });
      await this.afb.list('time_table/tennis/t6/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
       
      });
 
    }
  
    async _countB7(){
      this._ch7=0;
      await this.afb.list('time_table/tennis/t7/'+ this._i+'/16:00-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
       
      });
      await this.afb.list('time_table/tennis/t7/'+ this._i+'/17:00-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
       
      });
      await this.afb.list('time_table/tennis/t7/'+ this._i+'/18:00-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
       
      });
      await this.afb.list('time_table/tennis/t7/'+ this._i+'/19:00-20:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
       
      });
      await this.afb.list('time_table/tennis/t7/'+ this._i+'/20:00-21:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[1]=='true' ){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch1);
        this._show();
      });
    
    }
    async _show(){
      this.dataChart = {
       labels: ["T1", "T2", "T3", "T4", "T5","T6", "T7",],
       
        datasets: [
          {
            label: this._date2,
            data: [this._ch1, this._ch2,this._ch3,this._ch4, this._ch5, this._ch6,this._ch7],
            backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#B8860B', '#f39c12','#339900','#6A5ACD']
          }
        ]
      };
     
      this.optionsChart = {
        responsive: true,
        maintainAspectRatio: false,       
     pieceLabel: {
      render: 'value',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
     fontSize: 5,
    fontStyle: 'bold',
    fontColor: '#B8860B',
   fontFamily: '"db_heaventmed_cond"'

},
  };
    }
  
    inputdate(time_table: Timetable){
      this._date2=time_table.date;
      this.__i=0;
      this._i='';
      if(time_table.date[5]=='0'&&time_table.date[8]=='0'){
        for(this.i=0;this.i<time_table.date.length;this.i++){
          if(this.i==5||this.i==8){
            this._i=this._i+'';
          }
          else{
            this._i=this._i+time_table.date[this.i];
          }
        }
      }
      else if(time_table.date[5]=='0'){
        for(this.i=0;this.i<time_table.date.length;this.i++){
          if(this.i==5){
            this._i=this._i+'';
          }
          else{
            this._i=this._i+time_table.date[this.i];
          }
        }
      }
      else if(time_table.date[8]=='0'){
        for(this.i=0;this.i<time_table.date.length;this.i++){
          if(this.i==8){
            this._i=this._i+'';
          }
          else{
            this._i=this._i+time_table.date[this.i];
          }
        }
      }
      else{
        for(this.i=0;this.i<time_table.date.length;this.i++){
            this._i=this._i+time_table.date[this.i];
        }
      }

      console.log(this._i);
      this._countB1();
      this._countB2();
      this._countB3();
      this._countB4();
      this._countB5();
      this._countB6();
      this._countB7();
     

  }

}
