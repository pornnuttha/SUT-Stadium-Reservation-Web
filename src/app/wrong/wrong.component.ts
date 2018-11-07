import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-wrong',
  templateUrl: './wrong.component.html',
  styleUrls: ['./wrong.component.css']
})
export class WrongComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }
  _OK(){
    this.dialog.closeAll();
  }
  
  ngOnInit() {
  }

}
