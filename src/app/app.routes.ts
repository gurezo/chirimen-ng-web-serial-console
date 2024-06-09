import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { browserCheckGuard } from './guards/browser-check.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    canActivate: [browserCheckGuard],
  },
  {
    path: 'unsupported-browser',
    loadComponent: () =>
      import('./pages/unsupported-browser/unsupported-browser.component'),
  },
];
