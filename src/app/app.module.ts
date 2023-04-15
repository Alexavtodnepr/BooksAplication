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
import { BookSortPipe } from './shared/pipes/book-sort.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDatePeriodPipe } from './shared/pipes/book-date-period.pipe';
import { AddEditModalComponent } from './shared/components/add-edit-modal/add-edit-modal.component';
import { ChartComponent } from './pages/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    TruncatePipe,
    DialogComponent,
    BookSearchPipe,
    BookSortPipe,
    BookDatePeriodPipe,
    AddEditModalComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
