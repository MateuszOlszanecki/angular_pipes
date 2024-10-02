import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'happy',
  standalone: true,
})
export class HappyPipe implements PipeTransform {
  transform(value: string): string {
    return '😃' + value;
  }
}
