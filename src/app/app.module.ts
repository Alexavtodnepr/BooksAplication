import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { BookSearchPipe } from './shared/pipes/book-search.pipe';
import { MatSelectModule } from '@angular/material/select';
import { BookSortPipe } from './shared/pipes/book-sort.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MatDateFormats, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDatePeriodPipe } from './shared/pipes/book-date-period.pipe';

let UKRAINIAN_DATE_FORMATS;
export const MAT_DATE_FORMATS = new InjectionToken<MatDateFormats>('my-date-formats');

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    TruncatePipe,
    DialogComponent,
    BookSearchPipe,
    BookSortPipe,
    BookDatePeriodPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
