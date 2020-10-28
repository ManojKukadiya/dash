import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogModule, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-load-dialog',
  templateUrl: './load-dialog.component.html',
  styleUrls: ['./load-dialog.component.css']
})
export class LoadDialogComponent implements OnInit {

  private readonly matDialogRef: MatDialogRef<LoadDialogComponent>;
  constructor(matDialogRef: MatDialogRef<LoadDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.matDialogRef = matDialogRef;
  }

  ngOnInit(): void {
  }

  clearload(): void {
    this.matDialogRef.close();
  }
}

