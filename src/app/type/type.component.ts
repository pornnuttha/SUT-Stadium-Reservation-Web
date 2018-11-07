import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private db: AngularFireDatabase,) { }

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
flowchartbm2(){
  this.router.navigate(['/badfm2'], );
}
flowchartbm3(){
  this.router.navigate(['/badfm3'], );
}
flowcharttm(){
  this.router.navigate(['/Tennisfm'], );
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
}
