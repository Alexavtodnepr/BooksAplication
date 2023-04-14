import { Component, OnInit } from '@angular/core';
import { BooksApiService } from 'src/app/shared/services/books-api.service';
import { BookInterface } from 'src/app/models/book.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  booksArray?: BookInterface[];
  titleFilter!: string;
  sortBy!: string;
  choosedDate: any;
  constructor(private booksService: BooksApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.booksService.getAll().subscribe(el=>{
      this.booksArray = el;
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
}
