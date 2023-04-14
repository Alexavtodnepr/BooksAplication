import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    const index = value.indexOf('.');
    return index !== -1 ? value.slice(0, index + 1) : value;
  }
}
