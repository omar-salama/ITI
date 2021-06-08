import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLower'
})
export class ToLowerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toLowerCase();
  }

}
