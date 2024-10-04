import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { catchError, ignoreElements, Observable, of } from 'rxjs';
import { DatabaseService } from '../../services/database.service';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    CommonModule,
    StudentCardComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  templateUrl: './pipes-demo.component.html',
})
export class PipesDemoComponent implements OnInit {
  students$: Observable<Student[]>;
  studentsError$: Observable<Student[]>;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    let throwError = Math.random() < 0.5;
    this.students$ = this.databaseService.getStudents(throwError);
    this.studentsError$ = this.students$.pipe(
      ignoreElements(),
      catchError((error) => of(error))
    );
  }
}
