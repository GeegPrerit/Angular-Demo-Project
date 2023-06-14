import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custumpipe'
})
export class CustumpipePipe implements PipeTransform {

  transform(value: number): boolean {
    if (value <= 1) {
      return false;
    }

    // Check for divisibility from 2 to the square root of the value
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) {
        return false;
      }
    }

    return true;
  }


}
