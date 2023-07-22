import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeFormat'
})
export class DatetimeFormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }



}
