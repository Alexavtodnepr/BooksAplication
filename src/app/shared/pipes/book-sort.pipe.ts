import { Pipe, PipeTransform } from '@angular/core';
import { BookInterface } from 'src/app/models/book.interface';

@Pipe({
  name: 'bookSort'
})
export class BookSortPipe implements PipeTransform {

  transform(books: BookInterface[], sortBy: string): BookInterface[] {
    if (!books || !sortBy) {
      return books;
    }
    if (!books || !sortBy) {
      return books;
    }

    if (sortBy === 'name') {
      return books.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === 'date') {
      return books.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
    }

    if (sortBy === 'pageCount') {
      return books.sort((a, b) => a.pageCount - b.pageCount);
    }

    return books;
  }
}
