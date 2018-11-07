import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../environments/login.config';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { auth, UserInfo } from 'firebase';

@Component({
  selector: 'app-flot-chart-tennis',
  templateUrl: './flot-chart-tennis.component.html',
  styleUrls: ['./flot-chart-tennis.component.css']
})
export class FlotChartTennisComponent implements OnInit {
 
  user = {} as User;
  Userid: UserInfo
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afb: AngularFireDatabase,
    private db: AngularFireDatabase,) { }

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
    registerr(){
      this.router.navigate(['/registerforem'], );
    }
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
cancel(){
  this.router.navigate(['/login'])
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
  register(user: User){

    console.log('Test:', user.status);
    let path = null;

    let status = String(user.status);
    console.log(status)
    if(status == 'Employee'){
      path = 'Employee';
    }else if (status == 'Personal'){
      path = 'Personal';
    }else if(status == 'Student'){
      path = 'Student';
    }else if(status == 'Outsider'){
      path = 'Outsider';
    }else if(status == 'Admin'){
      path = 'Admin';
    }else{
      console.log(status)
    }
    
    try {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(data => {

        this.Userid = data.user;
        this.Userid.uid;
        this.router.navigate(['registerforem']);

        this.afAuth.authState.subscribe(auth => {
          this.afb.object(`user/${path}/${auth.uid}`).set(this.user)
            .then(() => this.router.navigate(['/registerforem']))

        })

      }).catch(error => { //after valid
        //  var code = error['code'];
        var message = error.message;
        
      });
    }
    catch (e) {
      //ตื่นมาแก้บัค
      //console.error("errorxxxx", e);
      // var code = e.code;
      var message = e.message;
      message = message.split(":")[1];
      if (e.code == "auth/argument-error") {
        
      }
    }
  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user =>{
      if(user){

      }
      else{
        this.afAuth.auth.signOut();
        this.router.navigate([''], );
      }
    });
  }

}
