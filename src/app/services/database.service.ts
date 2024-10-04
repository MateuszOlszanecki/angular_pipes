import { Injectable } from '@angular/core';
import { delay, Observable, of, tap, shareReplay } from 'rxjs';
import { Student } from '../models/student';

const DATA: Student[] = [
  {
    name: 'Mateusz',
    surname: 'Dzik',
    date_of_birth: new Date('03.08.2002'),
    stipend: 500,
    favourite_subject: 'Math',
  },
  {
    name: 'Dominik',
    surname: 'Paw',
    date_of_birth: new Date('11.12.2000'),
    stipend: 300,
    favourite_subject: 'Programming',
  },
  {
    name: 'Julia',
    surname: 'Chomik',
    date_of_birth: new Date('06.05.1998'),
    stipend: 600,
    favourite_subject: 'Physics',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  getStudents(throwError: boolean = false): Observable<Student[]> {
    return of(DATA).pipe(
      delay(1000),
      tap(() => {
        if (throwError) throw new Error('Could not fetch data!');
      }),
      shareReplay(1) // caches the last emitted value and provides it to new subscribers
    );
  }
}
