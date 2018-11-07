import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Timetable } from '../../environments/table.config';

@Component({
  selector: 'app-adminbadfm2',
  templateUrl: './adminbadfm2.component.html',
  styleUrls: ['./adminbadfm2.component.css']
})
export class Adminbadfm2Component implements OnInit {
  time_table = {} as Timetable;
  typeChart: any;
  dataChart: any;
  optionsChart: any;
  _date = new Date().getDate();
  _month = new Date().getMonth() + 1;
  _year = new Date().getFullYear();
  _ch5 : number;
  _ch6 : number;
  _ch7 : number;
  
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
flowchartbm2(){
  this.router.navigate(['/Adminbadfm2'], );
}
flowchartbm3(){
  this.router.navigate(['/Adminbadfm3'], );
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
    this._ch5=0;
    this._ch6=0;
    this._ch7=0;
   
    this._show();
    await this._countB5();
    await this._countB6();
    await  this._countB7();
   
  }
    async _countB5(){
    
      for(this.i=1;this.i<32;this.i++){
        this.__date=this._year + "-" + this._month + "-" + this.i;
        await this.afb.list('time_table/badminton/b1/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b2/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b3/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b4/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          
        });
        await this.afb.list('time_table/badminton/b5/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          
        });
        await this.afb.list('time_table/badminton/b6/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b7/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b8/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b9/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
        await this.afb.list('time_table/badminton/b10/'+ this.__date+'/18:00-18:30').valueChanges().subscribe(items => {
          console.log(items[0]);
           if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
            this._ch5=this._ch5+1;
          }
          console.log(this._ch5);
          this._show();
        });
      
      }
      
    }
   
  async _countB6(){
      
    for(this.i=1;this.i<32;this.i++){
      this.__date=this._year + "-" + this._month + "-" + this.i;
      await this.afb.list('time_table/badminton/b1/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b2/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b3/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b4/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b5/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b6/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b7/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b8/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b9/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
      await this.afb.list('time_table/badminton/b10/'+ this.__date+'/18:30-19:00').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch6=this._ch6+1;
        }
        console.log(this._ch6);
        this._show();
      });
    }
  }
  async _countB7(){
    
    for(this.i=1;this.i<32;this.i++){
      this.__date=this._year + "-" + this._month + "-" + this.i;
      await this.afb.list('time_table/badminton/b1/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b2/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b3/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b4/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b5/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b6/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b7/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b8/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b9/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
      await this.afb.list('time_table/badminton/b10/'+ this.__date+'/19:00-19:30').valueChanges().subscribe(items => {
        console.log(items[0]);
         if((items[0]=='true'&&items[1]=='true')||(items[0]=='true'&&items[2]=='true')){
          this._ch7=this._ch7+1;
        }
        console.log(this._ch7);
        this._show();
      });
    }
  }
  
  async _show(){
    this.dataChart = {
     labels: ["18.00-18.30","18.30-19.00","19.00-19.30",],
      
      datasets: [
        {
         
          data: [this._ch5, this._ch6,this._ch7],
         
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