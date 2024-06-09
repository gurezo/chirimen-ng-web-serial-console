import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { browserCheckGuard } from './guards/browser-check.guard';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [browserCheckGuard],
  },
  {
    path: 'unsupported-browser',
    loadChildren: () =>
      import('./pages/unsupported-browser/unsupported-browser.component'),
  },
];
