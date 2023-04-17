import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { BooksApiService } from 'src/app/shared/services/books-api.service';
import { BookInterface } from 'src/app/models/book.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { AddEditModalComponent } from 'src/app/shared/components/add-edit-modal/add-edit-modal.component';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackUpDataService } from 'src/app/shared/services/back-up-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnChanges, OnDestroy {
  booksArray?: BookInterface[];
  titleFilter!: string;
  sortBy!: string;
  choosedDate: any;
  subscr!: Subscription;
  activeIndex: number | null = null;
  constructor(private booksService: BooksApiService, public dialog: MatDialog, private _snackBar: MatSnackBar, private BackUpService:BackUpDataService, private backUpService:BackUpDataService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.subscr = this.booksService.getAll().subscribe(el=>{
      this.booksArray = el;
      this.BackUpService.setBackup(this.booksArray);
    })
  }

  openDialog(book:BookInterface, value: string,text:string) {
    const data={
      books : book.title,
      value: value,
      text: text,
    }
    this.dialog.open(DialogComponent, {data});
  }

  public searchValueChanged(value: string) {
    this.titleFilter = value;
  }

  public SortMethod(val: string) {
      this.sortBy = val;
  }

  public ChosedPeriod(val: any) {
    this.choosedDate = val;
  }

  public RemoveActiveClass() {
    this.activeIndex = null;
  }

  public setActive(event:Event,i:number) {
    this.activeIndex = i;
    event.stopPropagation();
  }

  public openForm(book:BookInterface) {
    if(book){
      this.backUpService.setBackupOne(book);
      this.dialog.open(AddEditModalComponent, {
        data: { book: book }
      }).afterClosed().subscribe((result:BookInterface)=>{
        if(result){
          this.booksService.editBook(result.id, result).subscribe(response=>{
            if(response){
              this.openSnackBar('Books ' + response.title + ': was updated');
              // так як апішка не працює повноцінно то цей код для функціоналу
              const index:number | undefined = this.booksArray?.findIndex((book: BookInterface) => +book.id === +result.id);
              if (index !== -1 && index !==undefined) {
                this.booksArray![index] = result;
              }
              // верхні строки видаляються а нижня раскоментовується))
              // this.getBooks();
            }
          })
        }else{
          this.getBooks();
        }
      })
    }
  }

  public AddingNewBook(book: BookInterface) {
    if(this.booksArray && book){
      this.booksService.addBook(book).subscribe(response=>{
        this.openSnackBar('Book ' + response.title + ': was added');
        // this.getBooks();
      })
        // верхня строка раскоментовується))
      book.id = this.booksArray?.length;
      this.booksArray.push(book);
    }
  }

  public deleteBook(removeBook: BookInterface) {
    this.booksService.deleteBook(removeBook.id).subscribe(response=>{
      // так як апішка не працює повноцінно то цей код для функціоналу
      this.openSnackBar('Book ' + removeBook.title + ': was deleted');
      this.booksArray = this.booksArray?.filter( book => book.id !== removeBook.id);
      // нижня раскоментовується))
      // this.getBooks();
    })
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, 'close');
  }

  public ngOnDestroy() {
    this.subscr.unsubscribe();
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(this.booksArray);
  }
}
