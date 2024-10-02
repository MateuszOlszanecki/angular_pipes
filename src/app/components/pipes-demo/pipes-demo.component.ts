import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../services/database.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, StudentCardComponent],
  templateUrl: './pipes-demo.component.html',
})
export class PipesDemoComponent implements OnInit {
  data$: Observable<Student[]>;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.data$ = this.databaseService.getData();
  }
}
