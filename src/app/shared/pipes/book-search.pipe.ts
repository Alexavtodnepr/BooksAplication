import { Pipe, PipeTransform } from '@angular/core';
import { BookInterface } from 'src/app/models/book.interface';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {

  transform(books: BookInterface[], title: string): BookInterface[] {
    if (!title) {
      return books;
    }
    const FilteredArray =
    books.filter((book) => {
      return book.title.toLowerCase().includes(title.toLowerCase());
    });
    localStorage.setItem('filteredArray', JSON.stringify(FilteredArray));
    return FilteredArray
  }

}
