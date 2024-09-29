import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SerialPort } from 'web-serial-polyfill';

export const WebSerialActions = createActionGroup({
  source: '[Web Searial]',
  events: {
    init: emptyProps(),
    connect: props<{ isConnect: boolean; port: SerialPort }>(),
    disConnect: emptyProps(),
    read: emptyProps(),
    write: emptyProps(),
  },
});
