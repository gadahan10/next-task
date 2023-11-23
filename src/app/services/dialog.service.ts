import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root',
})
export class DialogService {
  
  private dialogRef?: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  openDialog(component: any, config: any, data: any): void {
    config.disableClose = true;
    this.dialogRef = this.dialog.open(component, config);
    this.dialogRef.componentInstance.data = data;

  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
 
}