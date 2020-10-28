import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogModule, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.css']
})
export class SaveDialogComponent implements OnInit {
  private readonly matDialogRef: MatDialogRef<SaveDialogComponent>;
  constructor(matDialogRef: MatDialogRef<SaveDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.matDialogRef = matDialogRef;
  }

  ngOnInit(): void {
  }
  clearsave(): void {
    this.matDialogRef.close();
  }
}
