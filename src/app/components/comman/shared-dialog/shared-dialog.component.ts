import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.css']
})
export class SharedDialogComponent implements OnInit {

  message:string = "";
  title:string = "";
  buttonText:string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<any>,public dialog: MatDialog) { 
    this.message = data.message || this.message;
    this.title = data.title || this.title;
    if (data.buttonText) {
      this.buttonText = data.buttonText.cancel || this.buttonText;
    }
  }

  ngOnInit(): void {
  }

}
