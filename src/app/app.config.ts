import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {
  NgxMonacoEditorConfig,
  provideMonacoEditor,
} from 'ngx-monaco-editor-v2';
import { routes } from './app.routes';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: '/assets',
  defaultOptions: {
    scrollBeyondLastLine: false,
    baseUrl: '/assets',
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideMonacoEditor(monacoConfig),
  ],
};
