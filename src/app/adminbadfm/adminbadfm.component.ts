import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Timetable } from '../../environments/table.config';

@Component({
  selector: 'app-adminbadfm',
  templateUrl: './adminbadfm.component.html',
  styleUrls: ['./adminbadfm.component.css']
})
export class AdminbadfmComponent implements OnInit {
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
 
  _object: any;
  _datetime = this._year + "-" + this._month + "-" + this._date;
  _date2 : String;
  i:number;
  _i:String;
  __i:number;
  __date:String;
  _chm:number;
 
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
nex = function () {
  this.router.navigateByUrl('/type');
};
typeTennis = function () {
this.router.navigateByUrl('/tabletennis');
};
typeBasketball = function () {
this.router.navigateByUrl('/table');
};
typeFootball = function () {
this.router.navigateByUrl('/table');
};
flowchartbm(){
  this.router.navigate(['/Adminbadfm'], );
}
flowchartbm2(){
  this.router.navigate(['/Adminbadfm2'], );
}
flowchartbm3(){
  this.router.navigate(['/Adminbadfm3'], );
}
flowcharttm(){
  this.router.navigate(['/Admintennisfm'], );
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
     
    this._show();
   await  this._countB1();
   await  this._countB2();
   await  this._countB3();
   await  this._countB4();
    
  }
  async _countB1(){
    
    for(this.i=1;this.i<32;this.i++){
      this.__date=this._year + "-" + this._month + "-" + this.i;
      await this.afb.list('time_table/badminton/b1/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[0]=='true' && items[1]=='true' && items[1]=='true' ){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b2/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b3/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b4/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b5/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b6/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b7/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b8/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b9/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      await this.afb.list('time_table/badminton/b10/'+ this.__date+'/16:00-16:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch1=this._ch1+1;
        }
        console.log(this._ch1);
        this._show();
      });
      
      
    }
    
  }
  async _countB2(){
    
    for(this.i=1;this.i<32;this.i++){
      this.__date=this._year + "-" + this._month + "-" + this.i;
      await this.afb.list('time_table/badminton/b1/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
           if(items[0]=='true' && items[1]=='true' && items[1]=='true' ){
             this._ch2=this._ch2+1;
           }
           console.log(this._ch2);
           this._show();
         });
         await this.afb.list('time_table/badminton/b2/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch2=this._ch2+1;
          }
          console.log(this._ch2);
           this._show();
        });
        await this.afb.list('time_table/badminton/b3/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch2=this._ch2+1;
          }
          console.log(this._ch2);
           this._show();
        });
      await this.afb.list('time_table/badminton/b10/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/b4/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/b5/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/b6/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/7/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/b8/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/b9/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
      await this.afb.list('time_table/badminton/10/'+ this.__date+'/16:30-17:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch2=this._ch2+1;
        }
        console.log(this._ch2);
           this._show();
      });
     
    }
  }
  async _countB3(){
    
    for(this.i=1;this.i<32;this.i++){
      this.__date=this._year + "-" + this._month + "-" + this.i;
      await this.afb.list('time_table/badminton/b1/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[0]=='true' && items[1]=='true' && items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b2/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b3/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b4/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b5/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[0]=='true' && items[1]=='true' && items[1]=='true' ){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b6/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b7/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b8/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b9/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      await this.afb.list('time_table/badminton/b10/'+ this.__date+'/17:00-17:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch3=this._ch3+1;
        }
        console.log(this._ch3);
           this._show();
      });
      
    }
  }
  async _countB4(){
    
    for(this.i=1;this.i<32;this.i++){
      this.__date=this._year + "-" + this._month + "-" + this.i;
      await this.afb.list('time_table/badminton/b1/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[0]=='true' && items[1]=='true' && items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b2/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b3/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b4/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b5/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
        if(items[0]=='true' && items[1]=='true' && items[1]=='true' ){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b6/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b7/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
      });
      await this.afb.list('time_table/badminton/b8/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b9/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
      await this.afb.list('time_table/badminton/b10/'+ this.__date+'/17:30-18:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch4=this._ch4+1;
        }
        console.log(this._ch4);
           this._show();
      });
     
    }
  }
 

  async _show(){
    this.dataChart = {
     labels: ["16.00-16.30","16.30-17.00", "17.00-17.30", "17.30-18.00",],
     
      datasets: [
        {
         
          data: [this._ch1, this._ch2,this._ch3,this._ch4,],
          
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
}


