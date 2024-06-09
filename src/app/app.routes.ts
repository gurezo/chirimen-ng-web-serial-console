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
    path: 'console',
    loadComponent: () => import('./pages/console/console.component'),
    canActivate: [browserCheckGuard],
  },
  {
    path: 'editor',
    loadComponent: () => import('./pages/editor/editor.component'),
    canActivate: [browserCheckGuard],
  },
  {
    path: 'pin-assign',
    loadComponent: () => import('./pages/pin-assign/pin-assign.component'),
    canActivate: [browserCheckGuard],
  },
  {
    path: 'unsupported-browser',
    loadComponent: () =>
      import('./pages/unsupported-browser/unsupported-browser.component'),
  },
  {
    path: 'wifi-setting',
    loadComponent: () => import('./pages/wifi-setting/wifi-setting.component'),
    canActivate: [browserCheckGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component'),
  },
];
