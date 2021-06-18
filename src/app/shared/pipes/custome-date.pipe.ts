import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id';

@Pipe({
  name: 'customedate'
})
export class CustomeDatePipe implements PipeTransform {

  transform(
    value: any,
    parseFormat: string = 'DD MMMM YYYY',
    displayFormat: string = 'DD MMMM YYYY'
  ): string {
    // const month: string[] = [
    //   'Januari',
    //   'Februari',
    //   'Maret',
    //   'April',
    //   'Mei',
    //   'Juni',
    //   'Juli',
    //   'Agustus',
    //   'September',
    //   'Oktober',
    //   'November',
    //   'Desember'
    // ];
    const date = dayjs(value, parseFormat).locale(id);
    // const monthLocal = date.toDate().toLocaleString('id', { month: 'long' });
    // ${date.getDate()} ${monthLocal} ${date.getFullYear()}
    return `Tgl ${date.format(displayFormat)}`;
  }

}
