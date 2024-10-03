import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input() error_message: any;
}
