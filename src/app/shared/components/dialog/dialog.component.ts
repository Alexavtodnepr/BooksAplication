import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <div>
        <h2 mat-dialog-title *ngIf="data.books" class="bg-[#FFFFFF] text-black p-5">{{data.books + ' ' + data.value}}</h2>
        <mat-dialog-content><p>{{data.text}}</p></mat-dialog-content>
    </div>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>`,
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { books?:string, value: string, text: string }) {}
}
