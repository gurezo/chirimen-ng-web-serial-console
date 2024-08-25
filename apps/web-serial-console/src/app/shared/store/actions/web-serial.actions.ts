import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SerialPort } from 'web-serial-polyfill';

export const WebSerialActions = createActionGroup({
  source: '[Web Searial]',
  events: {
    initPort: emptyProps(),
    connectPort: props<{ isConnect: boolean; port: SerialPort }>(),
    disConnectPort: emptyProps(),
  },
});
