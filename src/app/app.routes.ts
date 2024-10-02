import { Routes } from '@angular/router';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pipes_demo', pathMatch: 'full' },
  { path: 'pipes_demo', component: PipesDemoComponent },
];
