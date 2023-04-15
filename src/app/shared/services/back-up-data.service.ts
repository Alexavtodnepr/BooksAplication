import { Injectable } from '@angular/core';
import { BookInterface } from 'src/app/models/book.interface';
import { BooksApiService } from 'src/app/shared/services/books-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BackUpDataService {

  constructor(private booksApi: BooksApiService, private _snackBar: MatSnackBar) { }

  setBackup(data: BookInterface[]){
    localStorage.setItem('backup', JSON.stringify(data));
  }

  setBackupOne(data: BookInterface){
    localStorage.setItem('backupOne', JSON.stringify(data));
  }

  getBackup(): BookInterface[]{
    return JSON.parse(localStorage.getItem('backup')!);
  }

  getBackupOne(): BookInterface{
    return JSON.parse(localStorage.getItem('backupOne')!);
  }

  BackUpMethod(current: BookInterface[]){
  }

  BackUpOne(book: BookInterface){
    const oldBook = this.getBackupOne();
    this.booksApi.editBook(book.id, oldBook).subscribe((res:BookInterface)=>{
      if(res){
        this.openSnackBar('Books ' + res.title + ': return old value');
      }
    })
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, 'close');
  }
}
