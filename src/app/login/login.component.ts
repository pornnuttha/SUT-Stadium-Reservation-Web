import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../environments/login.config';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { WrongComponent } from '../wrong/wrong.component';
import { NotCorrectComponent } from '../not-correct/not-correct.component';
import { FlotChartTennisComponent } from '../flot-chart-tennis/flot-chart-tennis.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datalist: AngularFireList<any>;
  items: AngularFireList<any[]>;

  user = {} as User;
  data: any[];
  test: Array<any>;

  status: {};
  studentid: string;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabaseModule,
    private db: AngularFireDatabase,
    public dialog1: MatDialog,

  ) {
    db.list<User>('user').valueChanges().subscribe(console.log);
    this.datalist = db.list('/user');
    this.items = db.list('/items');
    db.list('/items').valueChanges().subscribe(console.log);
  }

  login(user: User) {

     if (user.email == null || user.password == null ) {
       this.openDialog();

     }
   
    try {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(value => {
        this.isStudent(value.user.uid);
        this.isEmployee(value.user.uid);
        this.isAdmin(value.user.uid);

      }).catch(error => {
        this.openDialog1();
      });

    }
    catch (e) {
      console.log("error", e);
      //this.openDialog1();
    }

  }
  openDialog(): void {
    const dialogRef = this.dialog1.open(WrongComponent,{width: '400px'} );
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialog1(): void {
    const dialogRef = this.dialog1.open(NotCorrectComponent,{width: '400px'} );
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {

  }

  isStudent(uid) {
    this.db.list('user/Student/' + uid).valueChanges().subscribe(items => {
      this.test = items;
      console.log(items)
      for (var i = 0; i < items.length; i++) {
        if (String(items[i]) == 'Student') {
          this.checkStatus('Student')
        }
      }
    });
  }

  isAdmin(uid) {
    this.db.list('user/Admin/'+ uid).valueChanges().subscribe(items => {
      this.test = items;
      console.log(items)
      for (var i = 0; i < items.length; i++) {
        if (String(items[i]) == 'Admin') {
          this.checkStatus('Admin')
        }
      }
    });
  }

  isEmployee(uid) {
    this.db.list('user/Employee/' + uid).valueChanges().subscribe(items => {
      this.test = items;
      console.log(items)
      for (var i = 0; i < items.length; i++) {
        if (String(items[i]) == 'Employee') {
          this.checkStatus('Employee')
        }
      }
    });
  }
  checkStatus(s) {
    if (s == 'Admin') {
      this.router.navigate(['/typeadmin'])
    } else if (s == 'Employee' ) {
      this.router.navigate(['/type'])
    }
  }


}

