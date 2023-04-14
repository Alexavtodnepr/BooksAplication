import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
