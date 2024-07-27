import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { webSerialFeatureKey, webSerialReducer } from '@shared/store/reducers';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { routes } from './app.routes';
import { monacoConfig } from './constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideMonacoEditor(monacoConfig),
    provideStore({ [webSerialFeatureKey]: webSerialReducer }),
    provideStoreDevtools({
      maxAge: 25,
      connectInZone: true,
    }),
    provideRouterStore(),
    provideEffects(),
  ],
};
