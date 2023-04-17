import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { BookInterface } from 'src/app/models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class ExportToPdfService {

  constructor() { }

  exportToPdf(books: BookInterface[]) {
    const doc = new jsPDF.default();

    const tableData = books.map(book => [book.id, book.title, book.pageCount, book.publishDate]);

    const headers = [['ID', 'Title', 'Page Count', 'Publish Date']];

    const margin = { top: 60, right: 30, bottom: 40, left: 30 };
    const pageWidth = doc.internal.pageSize.width - margin.left - margin.right;
    const pageHeight = doc.internal.pageSize.height - margin.top - margin.bottom;
// не знайшов іншого способу обійти цю помилку, бо мало часу(
    // @ts-ignore
    doc.autoTable({
      head: headers,
      body: tableData,
      margin: margin,
      startY: margin.top + 10,
      pageBreak: 'auto',
      tableWidth: 'auto',
      columnWidth: 'wrap',
      theme: 'grid'
    });

    doc.save('books.pdf');
  }
}
