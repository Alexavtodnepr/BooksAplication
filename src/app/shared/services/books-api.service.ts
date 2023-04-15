import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { BookInterface } from 'src/app/models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private http: HttpClient) { }

  getAll():Observable<BookInterface[]>{
    return this.http.get<BookInterface[]>(environment.ApiUrl);
  }

  editBook(id:number, book:BookInterface):Observable<BookInterface>{
    return this.http.put<BookInterface>(environment.ApiUrl + id, book);
  }

  addBook(book:BookInterface):Observable<BookInterface>{
    return this.http.post<BookInterface>(environment.ApiUrl, book);
  }

  deleteBook(id:number):Observable<BookInterface>{
    return this.http.delete<BookInterface>(environment.ApiUrl+id);
  }
}
