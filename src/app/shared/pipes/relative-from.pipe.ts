import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id'
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Pipe({
  name: 'relativefrom'
})
export class RelativeFromPipe implements PipeTransform {

  transform(value: Date, valueFrom?: Date): string {

    if (!valueFrom) {
      valueFrom = new Date();
    }
    let now = valueFrom.getTime();
    dayjs.extend(relativeTime);
    let date = dayjs().locale(id).to(valueFrom);
    return `${date}`;
  }

}
