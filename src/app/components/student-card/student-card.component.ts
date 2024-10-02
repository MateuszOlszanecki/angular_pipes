import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { HappyPipe } from '../../pipes/happy.pipe';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReversePipe, HappyPipe],
  templateUrl: './student-card.component.html',
})
export class StudentCardComponent {
  @Input() student: Student;
}
