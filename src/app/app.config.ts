import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { routes } from './app.routes';
import { monacoConfig } from './constants';
import { provideStore } from '@ngrx/store';
import { provideRouterStore } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideMonacoEditor(monacoConfig),
    provideStore(),
    provideRouterStore(),
    provideEffects()
],
};
