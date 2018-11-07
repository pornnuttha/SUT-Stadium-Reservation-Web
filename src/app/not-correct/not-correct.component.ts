import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-not-correct',
  templateUrl: './not-correct.component.html',
  styleUrls: ['./not-correct.component.css']
})
export class NotCorrectComponent implements OnInit {

  constructor( public dialog: MatDialog,) { }
  _OK(){
    this.dialog.closeAll();
  }
  ngOnInit() {
  }

}
