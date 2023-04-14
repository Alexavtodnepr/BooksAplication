import { Pipe, PipeTransform } from '@angular/core';
import { BookInterface } from 'src/app/models/book.interface';

@Pipe({
  name: 'bookDatePeriod'
})
export class BookDatePeriodPipe implements PipeTransform {

  transform(books: BookInterface[], period: { start: Date, end: Date }): BookInterface[] {
    if (!books || !period) {
      return books;
    }

    return books.filter(book => {
      const publicationDate = new Date(book.publishDate);

      return publicationDate >= period.start && publicationDate <= period.end;
    });
  }
}
