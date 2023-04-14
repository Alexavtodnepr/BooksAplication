import { BookSortPipe } from './book-sort.pipe';

describe('BookSortPipe', () => {
  it('create an instance', () => {
    const pipe = new BookSortPipe();
    expect(pipe).toBeTruthy();
  });
});
