import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BooksApiService } from 'src/app/shared/services/books-api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  public chartType: string = 'bar';
  public chartData: any[] = [];
  public chartLabels: number[] = [];

  constructor(private bookApiService: BooksApiService) { }

  ngOnInit() {
    this.bookApiService.getAll().subscribe(books => {
      let data: number[] = [];
      let years: number[] = [];
      for (let book of books) {
        let year = new Date(book.publishDate).getFullYear();
        let index = years.indexOf(year);
        if (index !== -1) {
          data[index]++;
        } else {
          years.push(year);
          data.push(1);
        }
      }
      this.chartData = [{ data: data, label: 'Number of books' }];
      this.chartLabels = years;
    });
  }
}
