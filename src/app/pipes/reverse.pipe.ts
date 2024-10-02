import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse_string = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse_string += value[i];
    }

    return reverse_string;
  }
}
