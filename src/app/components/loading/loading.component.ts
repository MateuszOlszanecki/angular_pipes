import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {}
