import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookInterface } from 'src/app/models/book.interface';
import { BackUpDataService } from 'src/app/shared/services/back-up-data.service';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: BookInterface },
    private fb: FormBuilder, private backup: BackUpDataService) {
    this.bookForm = this.fb.group({
      title: [this.data.book.title, Validators.required],
      description: [this.data.book.description, Validators.required],
      excerpt: [this.data.book.excerpt],
      publishDate: [this.data.book.publishDate, Validators.required],
      pageCount: [this.data.book.pageCount, Validators.required]
    });
  }

  ngOnInit(): void { }

  onNoClick(): void {
    if(this.data.book.id){
      this.backup.BackUpOne(this.data.book);
    }
    this.dialogRef.close();
  }

  onSaveClick(data:BookInterface): void {
    if(this.data.book.id){
      data.id = this.data.book.id;
    }
    this.dialogRef.close(data);
  }

}
