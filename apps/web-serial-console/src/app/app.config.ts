import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { routes } from './app.routes';
import { monacoConfig } from './constants';
import {
  webSerialFeatureKey,
  webSerialReducer,
  xtermFeatureKey,
  xtermReducer,
} from './store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMonacoEditor(monacoConfig),
    provideStore({
      [webSerialFeatureKey]: webSerialReducer,
      [xtermFeatureKey]: xtermReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      connectInZone: true,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideRouterStore(),
    provideEffects(),
  ],
};
